import axios from 'axios';

const fetchProxy = async () => {
  try {
    const response = await axios.get('https://api.ipgeolocation.io/ipgeo', {
      params: {
        apiKey: '7d5c5c257c81440f831fc43eec7dfdba',
        ip: '8.8.8.8', // Use any IP you'd like to query
      },
    });

    // Extract IP and port (You may need a different approach depending on your use case)
    const proxy = {
      ip: response.data.ip, // IP address from the response
      port: 8080, // Add a static or assumed port (API does not provide it)
    };

    return proxy;
  } catch (error) {
    console.error('Failed to fetch proxy:', error.message);
    return null;
  }
};

const scraper = async () => {
  const proxy = await fetchProxy();

  if (!proxy) {
    console.error('No proxy available. Exiting...');
    return;
  }

  console.log(`Using proxy: ${proxy.ip}:${proxy.port}`);
};

(async () => {
  await scraper();
})();
