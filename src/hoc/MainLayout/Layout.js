import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Footer from '../../Сomponents/Footer/Footer';
import { withTranslation } from 'react-i18next';
import { Link } from "react-scroll";

class MainLayout extends Component {

    render() {
        const { t } = this.props;
        return (
            <>
                <header className="header">
                    <div className="container">
                        <a href="https://mycyber.bet?utm_source=cyberbetcup&utm_medium=button&utm_campaign=info"><img src="img/logo.svg" alt="Cyber.Bet Cup" className="logo"/></a>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="about"
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}>{t('About')}</Link>
                                </li>
                                <li>
                                    <Link to="teams"
                                          smooth={true}
                                          offset={-70}
                                          duration= {500}>{t('Teams')}</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>

                <Footer/>
            </>
        );
    }
}

export default withTranslation()(MainLayout);
