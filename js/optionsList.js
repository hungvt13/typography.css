export default class OptionsList{
  constructor(){}
  // get Option List
  static getList(){
    const storedOptions = [{
        text: 'general',
        value: 'general',
        valueH: 'general_header',
        valueP: 'general_paragraph'
      },
      {
        text: 'high-end',
        value: 'high-end',
        valueH: 'high-end_header',
        valueP: 'high-end_paragraph'
      },
      {
        text: 'modern',
        value: 'modern',
        valueH: 'modern_header',
        valueP: 'modern_paragraph'
      },
      {
        text: 'start-up',
        value: 'start-up',
        valueH: 'start-up_header',
        valueP: 'start-up_paragraph'
      },
      {
        text: 'elegant',
        value: 'elegant',
        valueH: 'elegant_header',
        valueP: 'elegant_paragraph'
      },
      {
        text: 'attention',
        value: 'attention',
        valueH: 'attention_header',
        valueP: 'attention_paragraph'
      },
      {
        text: 'medieval',
        value: 'medieval',
        valueH: 'medieval_header',
        valueP: 'medieval_paragraph'
      },
      {
        text: 'art',
        value: 'art',
        valueH: 'art_header',
        valueP: 'art_paragraph'
      },
    ];
    return storedOptions;
  }
}