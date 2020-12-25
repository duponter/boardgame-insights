import React from 'react';
import intl from 'react-intl-universal';
import 'antd/dist/antd.css';
import styles from './App.module.css';
import {Col, Layout, Row} from 'antd';
import {AppHeader} from '../components/Header/AppHeader';

const {Header, Content} = Layout;

class App extends React.Component {
    state = {initDone: false}

    componentDidMount() {
        this.loadLocales();
    }

    loadLocales() {
        const currentLocale = 'en';

        fetch(`locales/${currentLocale}.json`)
            .then(res => res.json())
            .then(data =>
                intl.init({
                    currentLocale,
                    locales: {
                        [currentLocale]: data
                    }
                }))
            .then(() => {
                this.setState({initDone: true});
            });
    }

    render() {
        return (
            this.state.initDone &&
            <Layout className={styles.AppHeader}>
                <Header style={{backgroundColor: 'azure'}}>
                    <AppHeader />
                </Header>
                <Content>
                    <Row>
                        <Col xs={1} xl={3}/>
                        <Col xs={22} xl={18}>
                            <p>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </Col>
                        <Col xs={1} xl={3} style={{border: '1px black solid'}}/>
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default App;
