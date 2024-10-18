import Traslate, { translate } from '@docusaurus/Translate';

const QUOTES = [
  {
    thumbnail: 'https://avatars.githubusercontent.com/u/3071208?v=4',
    name: 'Alvaro Lorente',
    title: translate({message: "Founder", id: "site.quote.alvaro.title"}),
    text: (
      <p>
        
        <Traslate id="site.quote.alvaro.text">I tried many note apps but none played well with google drive, So here we are.
        </Traslate>
        
      </p>
    ),
  },
];

export default QUOTES;