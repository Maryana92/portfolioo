import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton  } from 'react-mdl';


class Progects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://user-images.githubusercontent.com/5574267/32147681-74918d80-bceb-11e7-98d4-1cbc04b29eb4.gif) center / cover'}}>
                    React Project #1
                    </CardTitle>
                    <CardText>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'white', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1600/1*KN7zbaWkbm5E71zZWfTf7A.gif) center / cover'}}>
                    React Project #2
                    </CardTitle>
                    <CardText>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://thumbs.gfycat.com/GleamingGleefulBactrian-max-1mb.gif) center / cover'}}>
                    React Project #3
                    </CardTitle>
                    <CardText>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>


                </div>
                
            )
        } else if (this.state.activeTab === 1) {
            return(
                <div>
                    <h1>This is HTML/CSS </h1>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <div>
                    <h1>This is JavaScript </h1>
                </div>
            )
        }
    }
    

    render() {
       return (
           <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} 
                onChange={ (tabId) => this.setState({activeTab: tabId}) } 
                ripple>
                    <Tab>React</Tab>
                    <Tab>HTML/CSS</Tab>
                    <Tab>JavaScript</Tab>
                </Tabs>

                <Grid >
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
           </div>
       )
    }
}

export default Progects;