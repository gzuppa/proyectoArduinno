import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Nav from '../Nav/Nav'
import { Container, Grid, Header } from 'semantic-ui-react'
import Menu from './Menu'
import ProductList from './ProductList'
import CartList from './CartList'
import Order from './Order'
import style from './App.css'
import Robotin from '../../images/roboshop.png'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openOrder: false,
      total: 0,
      sum: 0,
      products: [
        {
          id: 1,
          name: 'Placa básica Arduino Uno con USB',
          picture: 'https://cdn.shopify.com/s/files/1/0925/9692/products/Screen_Shot_2018-03-20_at_3.58.21_PM_1024x1024.png?v=1544898674',
          price: 280,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Arduino',
          status: 22,
        },
        {
          id: 2,
          name: 'Paquete de 50 Leds de colores surtidos sencillos',
          picture: 'https://static4.depositphotos.com/1003648/332/i/950/depositphotos_3323301-stock-photo-seven-leds-of-different-colour.jpg',
          price: 60,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Basics',
          status: 68,
        },
        {
          id: 3,
          name: 'Arduino Nano V3.0',
          picture: 'https://www.iberobotics.com/wp-content/uploads/2017/11/Arduino_nano_V3.0_atmega328_compatible-2.jpg',
          price: 150,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Arduino',
          status: 12,
        },
        {
          id: 4,
          name: 'Medidor Ultrasónico ',
          picture: 'https://http2.mlstatic.com/hc-sr04-hc04-sensor-ultrasonico-ultrasonido-arduino-itytarg-D_NQ_NP_851064-MLA26433687632_112017-F.webp',
          price: 80,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Arduino',
          status: 6,
        },
        {
          id: 5,
          name: 'Motor DC Dual circuito independiente',
          picture: 'https://static4.tme.eu//products_pics/1/2/d/12d1d4c012fb0c06eae61b33a38acf3c/232732.jpg',
          price: 75,
          marca: 'Elektronix',
          status: 10,
        },
        {
          id: 6,
          name: 'Kit de iniciación arduino, motores, cables y accesorios',
          picture: 'https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201612/12/00102723702888____1__640x640.jpg',
          price: 720,
          marca: 'Olympus',
          status: 4,
        },
      ],
      cart: [],
    }

    this.handleSaveProduct = this.handleSaveProduct.bind(this)
    this.handlerAddProduct = this.handlerAddProduct.bind(this)
    this.handlerRemoveProduct = this.handlerRemoveProduct.bind(this)
    this.handlerOpenOrder = this.handlerOpenOrder.bind(this)
    this.handlerClearCart = this.handlerClearCart.bind(this)
  }

  handlerClearCart() {
    this.setState({
      cart: [],
      sum: 0,
      total: 0
    });
  }

  sumProducts(array) {
    var total = 0
    array.forEach(product => total += product.order)
    this.setState({total: total})
  }

  sumTotal(array) {
    var sum = 0
    array.forEach(product => sum += product.total)
    this.setState({sum: sum})
  }

  handlerAddProduct(indexCart, indexProduct){
    var statusCopy = Object.assign({}, this.state);
    if (statusCopy.products[indexProduct].status !== 0) {
      statusCopy.cart[indexCart].total += statusCopy.cart[indexCart].price
      statusCopy.cart[indexCart].order += 1
      statusCopy.products[indexProduct].status -= 1
      this.setState(statusCopy)
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
    } else {
      alert('Producto inexistente')
    }
  }

  handlerRemoveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)
    let cart = this.state.cart.find(p => p.id === productId)
    let indexCart = this.state.cart.findIndex(x => x.id === cart.id)

    var statusCopy = Object.assign({}, this.state);
    if(statusCopy.cart[indexCart].total === statusCopy.cart[indexCart].price ){
      indexCart !== -1 && statusCopy.cart.splice( indexCart, 1 );
      this.setState(statusCopy)
      alert('El producto fue eliminado del carrito de compras')
    } else {
      statusCopy.cart[indexCart].total -= statusCopy.cart[indexCart].price
      statusCopy.products[indexProduct].status += 1
      statusCopy.cart[indexCart].order -= 1
      statusCopy.total -= 1
      statusCopy.sum -= statusCopy.cart[indexCart].price
      this.setState(statusCopy)
    }
  }

  handleSaveProduct(productId) {
    let product = this.state.products.find(p => p.id === productId);
    let indexProduct = this.state.products.findIndex(x => x.id === product.id)

    var productCart = {
      id: product.id,
      name: product.name,
      img: product.picture,
      price: product.price,
      order: 1,
      total: product.price
    }

    var exist = this.state.cart.find(p => p.id === productId)
    if (undefined !== exist && exist !== null) {
      let indexCart = this.state.cart.findIndex(x => x.id === exist.id)
      this.handlerAddProduct(indexCart, indexProduct)
    }else{
      var statusCopy = Object.assign({}, this.state);
      statusCopy.products[indexProduct].status -= 1
      this.sumProducts(statusCopy.cart)
      this.sumTotal(statusCopy.cart)
      this.setState({
        cart: this.state.cart.concat([productCart]),
        statusCopy
      })
    }
  }

  handlerOpenOrder(event) {
    event.preventDefault()
    this.setState({ openOrder: true })
  }

  renderOpenOrder() {
    if (this.state.openOrder) {
      return (
        <Order
          sum={this.state.sum}
          onClearCart={this.handlerClearCart}
        />
      )
    }
  }

  render() {
    return (
    
      <Container className={style.root}>
      <Nav/>
  
        <Menu/>
        
        <Grid>
          <Grid.Column width={12}>
            <ProductList
              products={this.state.products}
              onSaveProduct={this.handleSaveProduct}
              onIncrementProduct={this.handleSaveProduct}
              onRemoveProduct={this.handlerRemoveProduct}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <CartList
              items={this.state.cart}
              total={this.state.total}
              onOpenOrder={this.handlerOpenOrder}
            />
            {this.renderOpenOrder()}
            <img src={Robotin}/>
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

export default Shop;