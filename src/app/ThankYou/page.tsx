import React from 'react';

const ThankYou = () => {
  return (
    <div style ={styles.container}>
      <h1 style={styles.title}>Thank you for shopping!!!</h1>
      <p style={styles.message}>Your order will be delivered in 3 Business days</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    backgroundColor: 'white',
  },
  title: {
    fontSize: '2.5em',
    color: 'blue',
  },
  message: {
    fontSize: '1.2em',
    color: "black",
  },
};

export default ThankYou;