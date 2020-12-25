import {Col, Row} from 'antd';
import styles from './AppHeader.module.css';
import intl from 'react-intl-universal';
import React from 'react';
import {Status} from './Status/Status';

export const AppHeader = () => {
    return (
        <Row>
            <Col xl={6}/>
            <Col xs={16} xl={12} className={styles.right}>
                {intl.get('header.navigation')}
            </Col>
            <Col xs={8} xl={4}>
                <Status />
            </Col>
            <Col xl={2}/>
        </Row>
    );
}