import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import {Route,NavLink,Switch,Redirect} from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPosts from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                 to='/' 
                                 exact
                                 activeClassName={"my-active"}
                                 activeStyle={{
                                         color:'red',
                                         textDecoration:'underline'                                
                              }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                                }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/*<Route path="/" exact render={()=> <h1>Home</h1>}/>
                <Route path="/" exact render={()=> <h1>Home 2</h1>}/>*/}
                <Switch>           
                <Route path="/new-post"  component={NewPosts}/>
                <Route path="/posts"  component={Posts}/>
                {/*<Route path="/"  component={Posts}/>*/}
                <Redirect from="/" to="/posts"/> 
                {/*Rendering a <Redirect> will navigate to a new location.*/}
                {/*Order is important*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;