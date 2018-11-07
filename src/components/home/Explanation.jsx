import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Explanation.css';

class Explanation extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Container className="explanation-bottom">
                    <h1 className="explanation-text explanation-title explanation-top">DECOUVREZ L'INTERFACE EPIDEMIUM</h1>
                    <Row className="explanation">
                        <Col className="explanation-text">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVvSURBVHhe7VtZiFxFFC3jvq8okZBJpm/1jAMGNaD4Y1zQL1ERXGJcAqKIKCgEIy60oOI2SfetHgdHXPBLiaAf6ocBkaj4IUkU/QgEd9yCGAeN4xJjvLfe7XZm+nb3e/3W7njgMMx7VXep9d1b1SZz2OppBvBhA+4DY3EH8Xdj3Xb6u8FA/Rqz7InDpeSgYe9+5ODF5Pw75PDejgT3k2+k4ckTpfIAAPCioNcVhzsR8FffGIsnjxVJfYhS/Vxy/l3VwUjEaZJToQY5SiT3AUp4Hhn8lu5QDPI0se4eM1Q9RjQVDCsqBxhbu5qM3DzH8DQI7hf6WzVLJoZEe84YqZ9Mw3UN8csWY9MmuN004l4y5doFxlQWiEUZYWziCDLienJ8I/HvFuPyILhvqEEepwZZJlamgLF1x/nhDu5FUjrTYkSRCPgx2Xk/Lcxn+K25Z3Bv+60NH6Tefr8wPR6Z+D358AI1yo1muGbFuy4oj59AlTf7+aYK7XdSo1i8Xbxtg+HaYr3yQHFSvG2D/xuBsLR2klJpsAiI4m0bDE8drVYcKOIj4m0bjFUO0isOEHn77AqLv6mVB4e3iacdwF9feuVB4UrxtAPAfahUzJ/g/lSfR2XZnS+edgC4N9TKuRLf9ts34Ov6+wgMFX2Cm1Ir58eZ5icvh+zgPlPKhCOPJrNhfy+rIyzeqwrIi4BrxTJO1a1Vy4Ql4DaR1AUlvFIVkAtxi+99Bo+GuBEsT6dQGKmfqgrImkHS5PTAKAqJeV3QykUhOBfI6wbAg0lhEULnR8UinqI3K++jE9ytIjEEAD9ShWTH7Wbo+UO8LUEKb1opE50+0RIWFp9UhWRC/Ic6YYVYwh3yql4uIjlBG2pnaABwlSooC/IW3QDUr1DL9MY3RWpIjFSXKELSJ3+ycyTL8HlNzgQp5XphqMBpPgC/VYWFpl/N7/PDW32vsISXinaeks+pZXolHwpFBp8Sa8LCkDO+jR61bjX1QoicJelrAOoXRmq8bgS3yyxad6hIj4ASXqcKDEX6yOEsVQN8It0pROcjtkZ5PpqP82msclYDR0KQZfqjVWBofmpKEyDS+ID2bO+sXna1lOIRuF55H4+8wPYMi6+pQsPzBxpRy0UarzNjJPPruWVwY/OQxLoz6f+EP9RoBMa6+GFrN+iCI5D3Z39eKABcRM8/kXe7KL5f6p8vnzrQryXz68dmr1OhAT4GTyKZwTLK7iqRavzFC767AO5OeUKNQ1uYVjc+LxcNMWDdy/OE9so91Cv/nf741Vq+4Gz1FHofZ/1px6+aUWgs8I0TXUFvBPfQ3IPSygKaBu+pZWMT14iSBGDd1lYFcYjPNHuIs79qmdicMaP1472ORODvI6iKYpB2nrIbpZHBN0+U9zEJ+LRYnxD4UAbcd6qyeExjHeApt5vinxGxPkHwSq4pLCIBnxKrEwZnnMB9oSotEvnbY3T9QrE6BfC1W01xkci3a9KFT3huUZUXgriDGiGDS5+2eg4pSy7MTZJ8XJAZwE2oRuRJcK+IdRkhuN32uWpMLsSdPiudOTgyLMq04ARQbgAcV43Kls+KNXmBokBwmxTDsiHfpVg4dZgYkyM4Nxg7M90LcZoCpLJYUQDY6llkVHZ3nYIkTYgbJ1mjVL+EGiKDg1x/TLdKtBYQ1t2U+o4B7m7RVmAA3pFeQ+ADoqUPAPVbEm8I/jFY34GzUYB/tTgTmbwGuLtEah8i+KrcqTsXgrwLgLtWpPUxOI/ofwasONmJ4H7s7SS5qOAYP9op99bi/OQvafBvkaz7eZ7Ds7mHGmy8eV9pYMEhr3YPiUPz2XeV9gmU3WXk9LZg8aPeH3nsSHmzr4Gi0FQzw2FgzL+mG5KPZr2twQAAAABJRU5ErkJggg==" alt="Security" />
                            <h3 className="explanation-spacing">Security</h3>
                        </Col>
                        <Col className="explanation-text">
                            <img src="http://www.epidemium.cc/images/256px-pictos-bleu-ftransp-hd-15.png" alt="Collaboration" />
                            <h3 className="explanation-spacing">Collaboration</h3>
                        </Col>
                        <Col className="explanation-text">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEEAAABBCAYAAACO98lFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQZSURBVHhe7ZtJaBRBFIbLXXHBLbgnmKmaCQEVURBEiQp6UBTFgLgiigZBRAQRD5KLGIImmapJAtGDHsQliiB4EATxoKJRD4obniQgHgT3DTHGv7qf09PTbTKZTDJL1wc/M9OvXnXX39VV1d0JMxgCQsnp4UxE1zEuK9ns4yNpa4DQjebqMROqk/SKldeNp2hAEKoqwQCSPEzRgCDUQR8TaikaEISscRnA5S9oLkUDgFCLYcJvu/HqHT7PspBcSNEAUNIwFga8ph7QgcYvpUiA4Oo8GaDHgBraGiCE2hY3gMsHrLx6KEUCApch9ILPtgHqKyuLhSkSECqqB6Ph95xeoHZSJEBwdTRugJCXaWuOE2mIoPuew0HfgvYx1jmAIj2Hy4r4dChke34sjbkcA71xzpwlGJEGxc3jnOkQRuTNdMhjy5MM0HrGZkYnUYnUEeqiU0e+TIfljaNw/V5xDtyl72hIPStpnEylu0ao7fFcrtryYzosjQo08mn8wB11JP3WZkRZWf0UyvQSauS4pL5Y5fWnrjvnEdGVOOAPCQ19yMJqGRqwGvP5BFzLW3E2XybEbTO4lCwSm0q12MxrGYLt9+PluNxBEcbCJybCwNaUVBotpqy+BqM+V0dwsM7Z5uqM9cTHQ+sgxLZ4zZA/LDNCTTNYKLYE308mxC9Rso1umCu3C0VisyirD9GzgJBX4zvVt7JC7aVoF1QPRNnN0It4riX5J+l3uzU7JJJTJoRVmfuMyrcsHF1E0RSBGUJtRD3PnXoShXEjmZwxIazWYiefnB3Ku0zUTaNoGuieoY459ZH03WIy2TNBX/cY4MLyAA6sztVtuWpBbBgVTB89OLoH1k6MD2so6pA1E/RA593JT2gXlcgMQs2BoRdg8nX0tg201U1WTLDW7ck7kN+YaFhAJfqXfjPBXvXthNp8K9ejerbocxPC0dk4y03QR99KHaV3M5QJMmaCVRFWeFwWsel1I5CgH1ndcVWgpZerXJ2ypj4uD1nfeWw91ZIdMmKCXoLaixo9sn/FWX/vSRbyET6rWKR2NGWlhn4KrBc33ak3s0mvTbAfUaHhPgnWWcdyNRKbT6V7TveXkS0u91BGz+m1CfqJjKcw1u1C7rYGw96SFyZohLrpKqjXAJkib0zQvYGrRhzIbRx0bUbf6eeNCX2JMQEYE0A6Jlg3YCnoX4MK0gS/uL9WWeWNCcCYAPrVBL165PJG90p4MVqAJjzxrdijhLdCxgRgTADGBJDTJugXIn4LEI9imyijAE3g8ppvIa+aKcOYYGFMAMYEYEwAxgRgTADGBGBMAMYEYEwAxgRgTADGBGBMAMYEYEwABWhCJXQoBa2gDJ2j/6LFr0yyKihD5+xPiv1Pzn+x+sf9FKLy+h9K/OJ+KmKMsb/rA3kRNlH+QQAAAABJRU5ErkJggg==" alt="Open data" />
                            <h3 className="explanation-spacing">Open Data</h3>
                        </Col>
                        <Col className="explanation-text">
                            <img src="http://www.epidemium.cc/images/256px-pictos-bleu-ftransp-hd-16.png" alt="Transdiciplinarity" />
                            <h3 className="explanation-spacing">Transdisciplinaire</h3>
                        </Col>
                    </Row>
                    <p className="explanation-p">Laissez-vous guider dans un espace collaboratif</p><br/><p className="explanation-p">capable de faire agir et interagir les médecins et chercheurs de façon intuitive et interactive.</p>
                </Container>
            </div>
        );
    }
}

export default Explanation;