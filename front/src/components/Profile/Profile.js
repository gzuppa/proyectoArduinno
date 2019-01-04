import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Pika from '../../images/pika.png'
import Nav from '../Nav/Nav'


class Profile extends Component{

  constructor(){
    super();
    this.state = {

    }
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

 
<Nav/>

<br/><br/><br/>

  <section class="section" id="about">
   
    <div class="section-heading">
      <h3 class="title is-2">Aqui va el nombre de usuario</h3>
      <h4 class="subtitle is-5">Pequeña descripcion</h4>
      <div class="container">
        <p>Descripcion completa del morro</p>
      </div>
    </div>

    <div class="columns has-same-height is-gapless">
      <div class="column">
       
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Perfil</h3>

            <div class="content">
              <table class="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Correo electronico:</td>
                  <td>pikachu@pokemon.com</td>
                </tr>
                <tr>
                  <td>Nickname</td>
                  <td>pikachu</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>minion@despicable.me</td>
                </tr>
              </table>
            </div>
            <br/>
          </div>
        </div>
      </div>
      <div class="column">
        
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
             
            </figure>
          </div>
        </div>
      </div>
      <div class="column">
       
        <div class="card">
          <div class="card-content skills-content">
            <h3 class="title is-4">Intereses</h3>
            <div class="content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
   <br/>



</div>
    )
  }
}

export default Profile;

