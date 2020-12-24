import React from 'react';
import 'antd/dist/antd.css';
import styles from './App.module.css';
import {Col, Layout, Row} from 'antd';

const {Header, Content} = Layout;

function App() {
    return (
        <Layout className={styles.AppHeader}>
            <Header style={{backgroundColor: 'azure'}}>
                <Row>
                    <Col xs={24} xl={6}>
                    </Col>
                    <Col xs={24} xl={12} className={styles.right}>
                        Menus
                    </Col>
                    <Col xs={24} xl={4} className={styles.right}>
                        User
                    </Col>
                    <Col xs={24} xl={2}>
                    </Col>
                </Row>
            </Header>
            <Content>
                <Row>
                    <Col xs={24} xl={3}>
                    </Col>
                    <Col xs={24} xl={18}>
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
                    <Col xs={24} xl={3} style={{border: '1px black solid'}}>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
}

export default App;
