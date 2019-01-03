import React, { Component } from 'react';
import Nav from '../Nav/Nav'


class Section extends Component{

  constructor(){
    super();
    this.state = {

    }

    //FUNCIONES AQUI

  } 

  render(){
    return(
  
<div>

<div class="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
    <div class="top-border wow fadeInDown animated" ></div>
    <div class="right-border wow fadeInRight animated" ></div>
    <div class="bottom-border wow fadeInUp animated" ></div>
    <div class="left-border wow fadeInLeft animated" ></div>
</div>

<Nav />
<br></br><br></br><br></br><br></br><br></br>

<div>
    <div class="uk-section uk-section-muted">
    <div class="uk-container">

        <h3>Section</h3>

        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>

    </div>
</div>

 </div>

                   

</div>
    )
  }
}

export default Section;

