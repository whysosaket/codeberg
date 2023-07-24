import jsdom from 'jsdom';

const url = 'https://www.soa.ac.in/iter';

const getPotalURL = async () => {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const parser = new jsdom.JSDOM(html).window.document;
    const portalURLElement = parser.querySelector('a[href*="CampusPortalSOA"]');
    let portalURL = portalURLElement?.getAttribute('href') || null;
    portalURL = portalURL!.split("index")[0];
    console.log('Portal URL:', portalURL);
    return portalURL;
  } catch (error) {
    console.log('Error:', error);
  }
}

export default getPotalURL;

/*
This student portal login text will be permanent select based on this
<a href="http://115.240.101.51:8282/CampusPortalSOA/index#/" class="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">
    Student Portal Login
  </a>
*/