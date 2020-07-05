import React, {Component} from 'react';
import {Trans, withTranslation} from 'react-i18next';
import FormEmail from "../../Сomponents/FormEmail/FormEmail";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lang: 'en',
            showBlockForm: true
        }
    }

    componentDidMount() {
        if (localStorage.getItem('email_cb')) {
            this.setState({
                showBlockForm: false
            })
        }

        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                total: t,
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };
        }

        function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector(".days");
            var hoursSpan = clock.querySelector(".hours");
            var minutesSpan = clock.querySelector(".minutes");
            var secondsSpan = clock.querySelector(".seconds");

            function updateClock() {
                var t = getTimeRemaining(endtime);

                if (t.total <= 0) {
                    document.getElementById("countdown").className = "hidden";
                    document.getElementById("deadline-message").className = "visible";
                    clearInterval(timeinterval);
                    return true;
                }

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
                minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
                secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }

        let deadline = "April 06 2020 00:00:00 GMT+0300";

        initializeClock('countdown', deadline);

        if (localStorage.getItem('i18nextLng') === 'en') {
            this.setState({
                lang: 'en'
            })
        } else {
            this.setState({
                lang: 'ru'
            })
        }
    }

    renderVideoEn() {
        return (
            <iframe title="iframe" src="https://www.youtube.com/embed/VYAhupPYfJU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }

    renderVideoRu() {
        return (
            <iframe title="iframe" src="https://www.youtube.com/embed/doJxFLn3bEs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }

    render() {
        const {t} = this.props;
        return (
            <>
                <section className="main">
                    <div className="container">
                        <a href="https://mycyber.bet?utm_source=cyberbetcup&utm_medium=button&utm_campaign=info"><img src="img/logo_cb.png" alt="Cyber.Bet Cup" className="main__logo"/></a>
                        <h1 className="main__title"><Trans i18nKey="Welcome to React">Cs:Go spring
                            championship <br/>by <span>cyber</span>bet <span className="date_cup">FROM APRIL 6 TO APRIL 14, 2020</span></Trans></h1>
                        <div className="count-list">
                            <div className="count-list__item">
                                <div id="prize_money"><span>10 000$</span> {t('Prize_Money')}</div>
                            </div>
                            <div className="count-list__item" id="time_is_up">
                                <div id="deadline-message" className="deadline-message">
                                    {t('Deadline_message')}
                                </div>
                                <div id="countdown" className="countdown">
                                    <div className="countdown-number">
                                        <span className="days countdown-time"></span>
                                        <span className="countdown-text">{t('Days')}</span>
                                    </div>
                                    <div className="countdown-number">
                                        <span className="hours countdown-time"></span>
                                        <span className="countdown-text">{t('Hours')}</span>
                                    </div>
                                    <div className="countdown-number">
                                        <span className="minutes countdown-time"></span>
                                        <span className="countdown-text">{t('Minutes')}</span>
                                    </div>
                                    <div className="countdown-number">
                                        <span className="seconds countdown-time"></span>
                                        <span className="countdown-text">{t('Seconds')}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="count-list__item">
                                <div id="match_days"><span>7</span> {t('Match_Days')}</div>
                            </div>
                        </div>

                        <div className="buttons">
                            <a href="https://liquipedia.net/counterstrike/Cyber.Bet_Invitational"
                               rel="noopener noreferrer" target="_blank"
                               className="btn_about btn_about_tournament">{t('Tournament_information')}</a>
                            <a href="https://mycyber.bet/en/content/team-heretics-crowned-champions-cyber-bet-cup-teams-review?utm_source=cyberbetcup&utm_medium=button&utm_campaign=info" rel="noopener noreferrer" target="_blank"
                               className="btn_about btn_about_matches">{t('Match_info')}</a>
                        </div>
                    </div>
                </section>
                <section className="video" id="about">
                    <div className="container">
                        {this.state.lang === 'en' ? this.renderVideoEn() : this.renderVideoRu()}
                        <div className="video__text"><Trans i18nKey="Description">Here comes Cyber.Bet Cup! <br/> <br/>The
                            first Counter-Strike: Global Offensive tournament by Cyber.bet starts on March 16. Teams and
                            players with Major experience and young talents all over Europe and CIS will battle for the
                            prize pool of $10 000. The whole game week will be fulfilled by statement games as every
                            match is important on the way to victory. Every day we wait you on stream.</Trans>
                        </div>
                    </div>
                </section>
                <section className="meet" id="teams">
                    <div className="container">
                        <h2>{t('Meet')}</h2>
                    </div>
                </section>
                <section className="teams">
                    <div className="container">
                        <div className="matches">
                            <div className="match">
                                <div className="team"><span className="team-img"><img src="/img/navi.png" alt="Natus Vincere Junior"/></span><span
                                    className="team-name">Natus Vincere Junior</span>
                                </div>
                                <div className="team"><span className="team-img"><img src="/img/movi.png"
                                                                                      alt="Movistar Riders"/></span> <span
                                    className="team-name">Movistar Riders</span>
                                </div>
                            </div>
                            <div className="match">
                                <div className="team"><span className="team-img"><img src="/img/hard.png" alt="Hard Legion Esports"/></span>
                                    <span className="team-name">Hard Legion Esports</span>
                                </div>
                                <div className="team"><span className="team-img"><img src="/img/mustang.png"
                                                                                      alt="Mustang Crew"/></span> <span
                                    className="team-name">Mustang Crew</span>
                                </div>
                            </div>
                            <div className="match">
                                <div className="team"><span className="team-img"><img src="/img/nor.png"
                                                                                      alt="Nordavind"/></span> <span
                                    className="team-name">Nordavind</span>
                                </div>
                                <div className="team"><span className="team-img"><img src="/img/smash.png" alt="Smash Esports"/></span>
                                    <span className="team-name">Smash Esports</span>
                                </div>
                            </div>
                            <div className="match">
                                <div className="team"><span className="team-img"><img src="/img/heretic.png"
                                                                                      alt="Team Heretics"/></span> <span
                                    className="team-name">Team Heretics</span>
                                </div>
                                <div className="team"><span className="team-img"><img src="/img/syman.png" alt="Syman Gaming"/></span>
                                    <span className="team-name">Syman Gaming</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    this.state.showBlockForm
                        ? <section className="schedule" id="schedule">
                            <div className="container">
                                <FormEmail/>
                            </div>
                        </section>
                        : null
                }

            </>
        );
    }
}

export default withTranslation()(Home)
