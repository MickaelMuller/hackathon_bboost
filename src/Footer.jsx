import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <footer className="socials sticky">
                <div className="container">
                    <div className="text-center center-block">
                        <strong className="white">Epidemium - &copy; 2018</strong>
                        <p onClick={this.toggle}><h6 className="white-text"> <span className="mentions"> Mentions légales</span></h6></p>
                        <a href="https://www.facebook.com/epidemiumcc/" target="_blank" rel="noopener noreferrer"><img className="icons" alt="reseaux" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGfSURBVGhD7dnNKkVRGMbxI0n5zC2YMCRTE6YYmkqJoTtwAdyACQOkkKkrMKGYSAwocxPKx0C+/m85tVq99trOWfZap96nfpPTWm897bP3+Vg1i8XSUNowjzO84SuxR+xjGKUjJTahDUztGZMoFbkS2pBc3KMPwZxDG5CTRRRG3lY53BMh6yhMP7SNudlFYaxIxazIf/mAPE6fnNfKyKbICabRiXp6MYNTaHtcWRTZRjt+yxS0fa7kRa7gXgUtLVFEvv6Ekn2RTwxAi9wfgz8WoO13JS1yBz8dOIQ8vbQ9v0laRL6M+hmFtjYkaZFj+BmHtjbEijTiFfJTuW4DfkbgrhG30Oa5Ki1ygUayDG2eqyWKbEGb52qJIpfQ5rmyL9KNd2jzXJUWucGYYwh+euCumYM2y1dpEZ99jiisSAxWRGFFYrAiCisSgxVRBIt0QdsYQ8wiOwjmAdrmZsUssopg9qBtblbMIhMIRo6AX6ANaMY1Zj0r0NYWOULpyBGw/N2vDUpJSsgD6U+RI+AlyMHjQULyhFpD6fN1i8Xip1b7BmzB3x8v5/laAAAAAElFTkSuQmCC" /></a>
                        <a href="https://twitter.com/epidemium_cc?lang=fr" target="_blank" rel="noopener noreferrer"><img className="icons" alt="reseaux" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL4SURBVGhD7dlJyE1hHMfxa86QJFKIEgsKIZF5KCuRhAUKUWTDBisbQsgYVshQbCxkjEhRkowLSRGZiQwlM9/fy/t2nPs/9557nuece9X51ac7dJ7nTM/z3Oc8t5AnT548WaQ5hmMGFmAS+qER/ov0wQG8xy/DI6xBO0RFJzsRHes+hTLs72taaYL1+AbrBMJeQ3crmGaYjpu4rC/C6YGvmFn3yX/UjE7BOuBSfmIl5mA/3qL++9EoijbWBl+gtuo7+xA8QFebYOY86jfSnZkNX5mG4EG40p1pDPUTdYcBaMhzBDfWrVsO1xFE/eIegnUn9QN7oWa2BQ9wFWq2DfkIq/AxmCNDzIyFVa8Pj9EV/0QjhLWxPMEUJMlmWHW6eoreKIqGMqtA0BnoN6CSnIRVl4u70ChrZh2sQmFqp0cwEnFyDVY9SemCt0VkNDVQB7cKR7mBFeiJqFyAVTapnSibo7AKx3EHGlEWYgi6QCOWpiLW9kntQNl0xztYFSTxHZ9D37lai8joyrX587YwDlFDcS1Yhsg0he7EdmhaPQoa3qyKqi08iSzKKwQLaJoS/FwrBqFkXDp6VnRxW6Fk5sEqXEuuoGxaIjxxrDUbECuzYFVQKzQIxc5uWJVU2wvoGSR29JuyB1Zl1bQViTIX4SG5WjRRLTWfK5vWWIxzqHRC6dNxJMp43MZZXEc1pyy6gAORKJqyPIRVcdYOwymTYVWcpQ/oBudsg7WDrCyCl2go3gVrJ2k7De+L2RqK38DaYRruoz1SiR74l+AS4i5CJ6Hnor7IJJpKaxHAOhAXOomhyCS6WlqmtA7EhVbZRyD1DMYhpNGstDbcC6lEI0Z/LMVFWAfggxb7vHTsCVgFrbyvhtaNtMyZ9oRRTUnPP14zBnqMtHbo2ydsRAekEjUlrbifgBbWrINw8RJ6VPUy5YibzlBTuwWX6bua50HoH6sWqGo6YSrUf9QxNfQ+g9q4lkP1qn+OdNL6s1PNZj60/lTRo2mePHnSSqHwGytirHRZXEWhAAAAAElFTkSuQmCC" /></a>
                        <a href="https://plus.google.com/communities/114916320676400256400" target="_blank" rel="noopener noreferrer"><img className="icons" alt="reseaux" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAARYSURBVGhD7dpZyG5THMfx1zwkQzrmKSkSh1wpY4Y4F4iScuOOIuLCdCVTMoWSiBvKDa6MR6YLyRCJEiKzkHmIzL7fU7tWq/9+3r3XXvt5XuxffS7OOetZe6/9PHv/11r7LE2ZMmXKlNnZCNtgs3V/+g/FAR2NK/Ew3sFv+DvxJz7CE7gZJ8GL8a+Kg7wbPyIdXFdelEdwKvw1rNicjFcQDaLU+zgHG2PFZG88ieiEa3kDR2DhORO/IDrJ2v7CDVjIz9yDep9GJza257At5pbN8Siik5mXN7E7Ro8PD5+g0UnMm2VuFUbNPYgOvigvYLQJzFmIDrpot6N6LD0/IzrgSuAcoGr61tlf8SFegjX0a0TtanF6ugWqxKsXHST3DW7E4dgAefbCeXgN0eeHugJV8jKiAzR+x/XYGl2yHpwnf4Kov1Lfous5tMaFQNR5w5+qbUpiSXkaUb+lLsSgzCpD32EfRNkQ++EoHIxoybcrrKVR36V8XhTH+vYToo7/wLHI4yAsE97PeftncBzMHngPaZtaDkRR/HaiDnUr8pyCtguUcg7+QfZ3y3kd9yXeRdROF6EoVyHq8AdshzQnwt2LqH0NlyDNbYja6TEU5SFEHd6FNNvDixC1raXPgD9DUdoeKCcgjbU3aldTnwGrqDw5W4o62xJNrKmz6qmbd33yIPzcq7gjcTzSnI703/MvxwrRKy4D0w4aPpTS7ISoXaPvgJtv7pp1f+qee5Ee91D0ylZIO2i4qZbmAETtGn0HfBn83NABr0GvWIPTDhrW1zTW06hd43E46WizKdLcBD83dMCHoXecLKSdNNKTdEbljCtq14XlLM398O8tLW4QNvLJhD/Z9N9fRNpv0eTDJVfaSSO/eqWbeU720wegaZuQ9H1K74De8fVH1JlbpWn2hSumqO0s+XLObyVqpz4D9kIWxXc9UYeWoXwfyROK2rZxybkJ0tyCqK36DPhZFMUXW1GHyk/Aenw13CyP2qfcBcl3G/dEW92X9/TFiecRtZMv74riU7Ttp+pU0n2uPK6G2jYMvsKlyN8cuDuyFtFnShyJ4lhHo07l7MZ6HcV18hlw5XIuXHm1vRCrOTX9FOujOKch6rjh/pS1uCSWtFn3bYnrMCj+/JZbu34BL4z3cdf4ZK/9xtFnwG4YnLMRHSBn8XdS37ZS8V51R/NOlJSx5dhvlfgtu1cUHSTiG3xfgTwAd0bcF3sKXyJqX8P32BnV4svoLiVnUc5H9bj3HB1s0XwWRBv/g2NZ8WV0dNBF+RhF8+aucYb0FqKDz5urtP0xenbB24hOYl5cIBSteUvjN+2cODqZsTmbWo25x40AN9CikxqLD6hR79ku8XVq22ZBLS5WLsCgeXLN+DL6cgzZ7ok4XXTjf0esyLh6coXUZ2YW8T69FlXmxvOKWzYO3v/T9TmigTV86rpT4eLdWd0oE4l5x2/ffexDcAwc2EHIX8xNmTJlypT/aZaW/gFl2ZD8nfkfewAAAABJRU5ErkJggg==" /></a>
                        <a href="mailto:#" target="_blank" rel="noopener noreferrer"><img className="icons" alt="reseaux" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIhSURBVGhD7ZpNThRRFIU7yFBXICwC2QMTRVkJrMEQYUZchUPjzDjAMJdVwA5QRpjAOaZfQtpT9U69qv65yf2SL4TAue9W05x0dXqWJEmSJEmSrIn38Arew8cN9w/krm9hE5+gGhzBj3AQfJTUoEgeQJsfUA2J5Hdo8wWqIZHkNQziCN5CNWyT5c7cvYlX8DP8C9XwTZI7clfuPJp9eA3VQZsgd+OOk7INT+BvqA5dh9yFO3G3UXyYf1Xswm9QLbBKuQN36aLvGv6jDNz5951mXaVWKyXuXP4gNmV4ecq8gIqXcFWlVkqJZyq44+K/nM3zg2itFJZdaq3n2ywG6QPse4SXUWq1UirPMO6m8jYqXLyBvIvqYqpSq5USd+AuKlu0UeFFv8K+UmNLtpQaM30NyzN5tsouaqPCyjt4DKcoNaeUeBbPVHmljQr3+Qu+gV3USq1WSpzNM1S2TxsVrsniuIBDSs0pJc7sKqWaNirsyiI5hF2UFwa1FzacUSulmjYqPFQWy2s4FGbcUqppo8ItllLbgjX4O0NLqaaNCo+RhbMHu+DPWkqppo0Kj1WV2thSqmmjwlPJIjqfu+y7LRsVjqiNCkfURoUjaqPCEbVR4YjaqHBEbVQ4ojYqHFEbFY6ojQpH1IYfH1ADIsm7LpufUA2JJK/Bhm+BqiGRfAcHcQbVoAiewib4KPGpMeW7EMuSO17C5o8tJUmSJEmSJO3MZk+o87nkQrHdowAAAABJRU5ErkJggg==" /></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;