export async function getConfig(lang = 'de') {
    try {
      const response = await fetch(`https://testapi.einzelwerk.io/api/${lang}/config`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null; 
    }
  }
  