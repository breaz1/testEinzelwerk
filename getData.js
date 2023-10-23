export async function getData(lang) {
    try {
      const response = await fetch(`https://testapi.einzelwerk.io/api/${lang}/resource/home`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null; 
    }
  }
  