import React from 'react';
import intl from 'react-intl-universal';
import 'antd/dist/antd.css';
import {Col, Layout, Row} from 'antd';
import {AppHeader} from '../components/Header/AppHeader';
import Sider from 'antd/lib/layout/Sider';
import {Status} from "../components/Header/Status/Status";

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
            <Layout hasSider>
                <Layout style={{border: "1px black solid"}}>
                    <Header style={{backgroundColor: 'azure'}}>
                        <AppHeader/>
                    </Header>
                    <Content>
                        <Row>
                            <Col span={18} offset={3}>
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
                        </Row>
                    </Content>
                </Layout>
                <Sider style={{backgroundColor: 'white'}}>
                    <Row>
                        <Col>
                            <Status />
                        </Col>
                    </Row>
                </Sider>
            </Layout>
        );
    }
}

export default App;
