import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import { aggregateOrders } from '../../../utility/order';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    fontSize: 12,
  },
  section: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  innerSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
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
});

const OrderAggregatePdf = (props) => {
  const { items } = props;

  return (
    <Document>
      <Page size="A4" wrap style={styles.page}>
        <View style={styles.section}>
          <View style={styles.innerSection}>
            <View style={styles.tableHeader}>
              <Text style={{ width: '55%' }}>Product</Text>
              <Text style={{ width: '15%' }}>Quantity</Text>
            </View>
            {items.map((i) => {
              return (
                <View key={i.name} style={styles.tableRow}>
                  <Text style={{ width: '55%' }}>{i.name}</Text>
                  <Text style={{ width: '15%' }}>{i.quantity}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};

OrderAggregatePdf.propTypes = {
  items: arrayOf(
    shape({
      name: string,
      quantity: number,
    })
  ).isRequired,
};

export default OrderAggregatePdf;
