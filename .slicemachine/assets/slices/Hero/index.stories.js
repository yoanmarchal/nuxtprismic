import MyComponent from '../../../../slices/Hero';

export default {
  title: 'slices/Hero'
}


export const _Default = () => <MyComponent slice={{"variation":"default","name":"Default","slice_type":"hero","items":[],"primary":{"text":[{"type":"paragraph","text":"Qui ad sint ipsum incididunt ut. Anim id est fugiat velit ea. Anim eiusmod sint sint non commodo culpa et irure cillum duis cillum dolore id minim laborum.","spans":[]}],"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560762484-813fc97650a0?w=900&h=500&fit=crop"}},"id":"_Default"}} />
_Default.storyName = 'Default'

export const _WithButton = () => <MyComponent slice={{"variation":"withButton","name":"With Button","slice_type":"hero","items":[],"primary":{"text":[{"type":"paragraph","text":"Est nulla sit cupidatat esse et ullamco nisi eu officia exercitation in magna proident. Fugiat labore minim ad ipsum ut commodo. Lorem duis dolore proident nostrud incididunt est est sint qui elit ad dolor in.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"},"buttonImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"},"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1494173853739-c21f58b16055?w=900&h=500&fit=crop"}},"id":"_WithButton"}} />
_WithButton.storyName = 'With Button'
