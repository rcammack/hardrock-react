import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Grid } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image centered
                              src="http://courses.ics.hawaii.edu/ics314f17/morea/ui-frameworks/hard-rock-logo.png"/></Menu.Item>
            <Menu.Item position="right" style={{ color: '#ccc' }}>CAFES</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>HOTELS</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>CASINOS</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>LIVE</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>SHOP</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>BLOG</Menu.Item>
            <Menu.Item style={{ color: '#ccc' }}>REWARDS</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image fluid
               src="http://www.hardrock.com/cafes/honolulu/files/2384/Honolulu_Entrance.jpg"/>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid>
            <Grid.Row centered>
              <Header as="h2" style={{color: '#FFF'}}>HARD ROCK CAFE HONOLULU</Header>
            </Grid.Row>
            <Grid.Row centered>
              <Icon name="phone"/>
              +1-808-955-7383 &nbsp; &nbsp; &nbsp;
              <Icon name="mail"/>
              Email Us &nbsp; &nbsp; &nbsp;
              <Icon name="home"/>
              280 Beachwalk, Honolulu, Hawaii 96815 &nbsp; &nbsp; &nbsp;
              <Icon name="twitter"></Icon>
              <Icon name="facebook f"></Icon>
              <Icon name="instagram"></Icon>
              <Icon name="pinterest"></Icon>
              <Icon name="tripadvisor"></Icon>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

class HardRock extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<HardRock/>, document.getElementById('root'));