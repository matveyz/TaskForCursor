import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route } from 'react-router';
import App from 'components/App';
import Home from 'components/Home';
import Stuff from 'components/Stuff';
import Contact from 'components/Contact';
import FourOhFour from 'components/FourOhFour';
import './index.css';

var destination = document.querySelector("#root");

    var { router, Route, IndexRoute, hashHistory, IndexLink, Link } = ReactRouter;

    const Home = React.createClass({
      render: function() {
          return (
            <div>
              <h2>Hello everyone who visit this page!</h2>
              <p>SPA - Sanum Per Aqua or Health trough water. Sometimes you need to deeply relax, away from your worries and your bussy schedule. You need warm water, relaxing massage, nice athmosphere, quiet music, silence... relax.

              If you are looking for a best SPA center, you are at the right place. We have carefully selected every of our methodics for relaxing and for emotions what you whould be have from our SPA center "Relax"</p>

              <p id="regards">With best regards SPA center "Relax" &reg;</p>
            </div>
          );
        }
    });

    const Contact = React.createClass({
      render: function() {
          return (
            <div>
              <h2>If you have some questions?</h2>
              <p id="head">You can contact us from different sources like skype, e-mail, phone-number.We are always have the answers on all your questions:
              </p>
              <ul>
                <li>Skype: spacenterRelax</li>
                <li>E-Mail: spacenterrelax@gmail.com</li>
                <li>Phone-Number: 877-427-5776</li>
              </ul>
              <p id="regards">With best regards SPA center "Relax" &reg;</p>
            </div>
          );
        }
    });

    const Stuff = React.createClass({
      render: function() {
          return (
            <div>
              <h2>Stuff Information</h2>
              <p id="head">In other spa you can find different <b>Methodics</b>:</p>
              <ol>
                <li>Performance Massage</li>
                <li>Master Therapy Massage</li>
                <li>Aromatherapy Massage</li>
                <li>Reflexology</li>
                <li>Stone Therapy Massage</li>
                <li>Thai Massage</li>
                <li>Pre-Natal and Post-Natal Massage</li>
                <li>Regenerative Massage</li>
                <li>Body Scrub</li>
                <li>Caudalie Crushed Cabernet Scrub</li>
              </ol>
              <p id="regards">With best regards SPA center "Relax" &reg;</p>
            </div>
          );
        }
    });

    const FourOhFour = React.createClass({
      render: function() {
          return (
            <div>
              <h2>You have a problems, plaese try again later!</h2>
              <p>This page is missing. Maybe it never existed.
              Maybe we never existed. What if nothing is real?</p>
              <p id="regards">With best regards SPA center "Relax" &reg;</p>
            </div>
          );
        }
    });


    const App = React.createClass({
      render: function() {
        return (
          <div>
            <h1>SPA center "Relax" <span>&reg;</span></h1>
            <ul className="header">
              <li><IndexLink to="/" activeClassName="active">HOME</IndexLink></li>
              <li><Link to="/stuff" activeClassName="active">STUFF</Link></li>
              <li><Link to="/contact" activeClassName="active">CONTACT</Link></li>
            </ul>
            <div className="content">
              {this.props.children}
            </div>
          </div>
        )
      }
    });

    export default (
        <Route component={App} path='/'>
          <IndexRoute component={Home} />
          <Route component={Stuff} path='stuff' />
          <Route component={Contact} path='contact' />
          <Route component={FourOhFour} path='*' />
        </Route>
    );
