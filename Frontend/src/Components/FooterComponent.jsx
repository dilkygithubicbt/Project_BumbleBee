import React, { Component } from 'react';
import '../../src/assets/img/apple-icon.png';
import '../../src/assets/img/favicon.ico';
import '../../src/assets/css/bootstrap.min.css';
import '../../src/assets/css/templatemo.css';
import '../../src/assets/css/custom.css';
import '../../src/assets/css/fontawesome.min.css';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>

                <footer class="bg-dark" id="tempaltemo_footer">
                    <div class="container">
                        <div class="row">

                            <div class="col-md-4 pt-5">
                                <h2 class="h2 text-success border-bottom pb-3 border-light logo">Bumble Bee Shop</h2>
                                <ul class="list-unstyled text-light footer-link-list">
                                    <li>
                                        <i class="fas fa-map-marker-alt fa-fw"></i>
                                        123 Colombo7
                                    </li>
                                    <li>
                                        <i class="fa fa-phone fa-fw"></i>
                                        <a class="text-decoration-none" href="tel:010-020-0340">0112 123 456</a>
                                    </li>
                                    <li>
                                        <i class="fa fa-envelope fa-fw"></i>
                                        <a class="text-decoration-none" href="mailto:info@company.com">Bumble@company.com</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-4 pt-5">
                                <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                                <ul class="list-unstyled text-light footer-link-list">
                                    <li><a class="text-decoration-none" href="#">Sport Wear</a></li>
                                    <li><a class="text-decoration-none" href="#">Men's Shoes</a></li>
                                    <li><a class="text-decoration-none" href="#">Women's Shoes</a></li>
                                    <li><a class="text-decoration-none" href="#">Shoes</a></li>
                                </ul>
                            </div>

                            <div class="col-md-4 pt-5">
                                <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                                <ul class="list-unstyled text-light footer-link-list">
                                    <li><a class="text-decoration-none" href="#">Home</a></li>
                                    <li><a class="text-decoration-none" href="#">Register</a></li>
                                    <li><a class="text-decoration-none" href="#">Login as a Admin</a></li>
                                </ul>
                            </div>

                        </div>

                        <div class="row text-light mb-4">
                            <div class="col-12 mb-3">
                                <div class="w-100 my-3 border-top border-light"></div>
                            </div>
                            <div class="col-auto me-auto">
                                <ul class="list-inline text-left footer-icons">
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                                    </li>
                                    <li class="list-inline-item border border-light rounded-circle text-center">
                                        <a class="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-auto">
                                <label class="sr-only" for="subscribeEmail">Email address</label>
                                <div class="input-group mb-2">

                                    <div class="input-group-text btn-success text-light">About</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-100 bg-black py-3">
                        <div class="container">
                            <div class="row pt-2">
                                <div class="col-12">
                                    <p class="text-left text-light">
                                        Copyright &copy; 2021 Bumble Bee
                                        | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">Bumble Bee</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
        );
    }
}

export default FooterComponent;