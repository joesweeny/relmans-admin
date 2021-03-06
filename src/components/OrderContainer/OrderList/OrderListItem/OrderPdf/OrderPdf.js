import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import displayMeasurement from '../../../../../utility/display';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 0,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 10,
  },
  column: {
    width: '50%',
  },
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  innerSection: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 0,
  },
  innerFullSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 0,
    paddingTop: 0,
    paddingBottom: 5,
  },
  innerSectionText: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  tableHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 600,
    borderTop: 1,
    borderBottom: 1,
    paddingTop: 5,
    paddingBottom: 5,
  },
  tableRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  image: {
    width: 200,
    height: 100,
  },
});

const OrderPdf = (props) => {
  const { order } = props;
  const { firstName, lastName, address, phone, email } = order.customer;
  const { type, date } = order.method;
  const fulfilmentDate = new Date(date);
  const orderDate = new Date(order.createdAt);

  return (
    <Document>
      <Page size="A4" wrap style={styles.page} orientation="landscape">
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.innerSection}>
              <Text style={styles.innerSectionText}>
                Customer: {firstName} {lastName}
              </Text>
              <Text style={styles.innerSectionText}>Telephone: {phone}</Text>
              <Text style={styles.innerSectionText}>Email: {email}</Text>
            </View>
            <View style={styles.innerSection}>
              <Text style={styles.innerSectionText}>
                Fulfilment Type: {type}
              </Text>
              <Text style={styles.innerSectionText}>
                Fulfilment Date:{' '}
                {type === 'DELIVERY'
                  ? fulfilmentDate.toLocaleDateString()
                  : `${fulfilmentDate.toLocaleDateString()} - ${fulfilmentDate.toLocaleTimeString()}`}
              </Text>
              <Text style={styles.innerSectionText}>
                Order Date: {orderDate.toLocaleString()}
              </Text>
            </View>
          </View>
          <View style={styles.innerFullSection}>
            {type === 'DELIVERY' ? (
              <Text style={styles.innerSectionText}>
                Address: {address.line1}
                <Text>{address.line2 ? `, ${address.line2}` : null}</Text>
                <Text>{address.line3 ? `, ${address.line3}` : null}</Text>
                <Text>{address.town ? `, ${address.town}` : null}</Text>
                <Text>{address.county ? `, ${address.county}` : null}</Text>
                <Text> {address.postCode}</Text>
              </Text>
            ) : null}
          </View>
          <View style={styles.tableHeader}>
            <Text style={{ width: '15%' }}>Quantity</Text>
            <Text style={{ width: '55%' }}>Product</Text>
            <Text style={{ width: '15%' }}>Measurement</Text>
            <Text style={{ width: '15%' }}>Price</Text>
          </View>
          {order.items.map((i) => {
            return (
              <View key={i.name} style={styles.tableRow}>
                <Text style={{ width: '15%' }}>{i.quantity}</Text>
                <Text style={{ width: '55%' }}>{i.name}</Text>
                <Text style={{ width: '15%' }}>
                  {displayMeasurement(i.measurement, i.size)}
                </Text>
                <Text style={{ width: '15%' }}>
                  £{(i.price / 100).toFixed(2)}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={styles.column}>
          <View style={styles.section}>
            <View style={styles.innerSection}>
              <Text style={styles.innerSectionText}>
                Customer: {firstName} {lastName}
              </Text>
              <Text style={styles.innerSectionText}>Telephone: {phone}</Text>
              <Text style={styles.innerSectionText}>Email: {email}</Text>
            </View>
            <View style={styles.innerSection}>
              <Text style={styles.innerSectionText}>
                Fulfilment Type: {type}
              </Text>
              <Text style={styles.innerSectionText}>
                Fulfilment Date:{' '}
                {type === 'DELIVERY'
                  ? fulfilmentDate.toLocaleDateString()
                  : `${fulfilmentDate.toLocaleDateString()} - ${fulfilmentDate.toLocaleTimeString()}`}
              </Text>
              <Text style={styles.innerSectionText}>
                Order Date: {orderDate.toLocaleString()}
              </Text>
            </View>
          </View>
          <View style={styles.innerFullSection}>
            {type === 'DELIVERY' ? (
              <Text style={styles.innerSectionText}>
                Address: {address.line1}
                <Text>{address.line2 ? `, ${address.line2}` : null}</Text>
                <Text>{address.line3 ? `, ${address.line3}` : null}</Text>
                <Text>{address.town ? `, ${address.town}` : null}</Text>
                <Text>{address.county ? `, ${address.county}` : null}</Text>
                <Text> {address.postCode}</Text>
              </Text>
            ) : null}
          </View>
          <View style={styles.tableHeader}>
            <Text style={{ width: '15%' }}>Quantity</Text>
            <Text style={{ width: '55%' }}>Product</Text>
            <Text style={{ width: '15%' }}>Measurement</Text>
            <Text style={{ width: '15%' }}>Price</Text>
          </View>
          {order.items.map((i) => {
            return (
              <View key={i.name} style={styles.tableRow}>
                <Text style={{ width: '15%' }}>{i.quantity}</Text>
                <Text style={{ width: '55%' }}>{i.name}</Text>
                <Text style={{ width: '15%' }}>
                  {displayMeasurement(i.measurement, i.size)}
                </Text>
                <Text style={{ width: '15%' }}>
                  £{(i.price / 100).toFixed(2)}
                </Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

OrderPdf.propTypes = {
  order: shape({
    id: string.isRequired,
    customer: shape({
      firstName: string.isRequired,
      lastName: string.isRequired,
      address: shape({
        line1: string,
        line2: string,
        line3: string,
        town: string,
        county: string,
        postCode: string,
      }),
      phone: string,
      email: string,
    }).isRequired,
    method: shape({
      type: string,
      date: string,
      fee: number,
    }),
    items: arrayOf(
      shape({
        name: string,
        price: number,
        size: number,
        measurement: string,
        quantity: number,
      })
    ),
  }).isRequired,
};

export default OrderPdf;
