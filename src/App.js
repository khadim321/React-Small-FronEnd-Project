import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation className="navstyle">
                <Link to="/resume"> Resume </Link>
                <Link to="/aboutme"> About me </Link>
                <Link to="/project"> Projects </Link>
                <Link to="/contact"> Contect me </Link>
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation className="navstyle">
                <Link to="/resume"> Resume </Link>
                <Link to="/aboutme"> About me </Link>
                <Link to="/project"> Projects </Link>
                <Link to="/contact"> Contect me </Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
