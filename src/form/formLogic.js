export const graphCreateAction = (refCollec) => (e) => {
  e.preventDefault();
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('height', `${500}px`);
  svg.setAttribute('width', `${500}px`);
  svg.setAttribute('viewBox', `0 0 500 500`);
  document.getElementById('root').appendChild(svg);
}

export const genGraphForm = (refCollection) => {
  const form = document.createElement('form');
  const span = document.createElement('span');
  const col1 = document.createElement('div');
  const col2 = document.createElement('div');
  span.appendChild(col1);
  span.appendChild(col2);
  form.appendChild(span)
  // form.setAttribute('action', graphCreateAction);
  
  var i = document.createElement("input"); //input element, text
  i.setAttribute('type',"text");
  i.setAttribute('name',"xAxis");
  i.setAttribute('placeholder', 'X-Axis Label');
  refCollection.setRef('xAxis')(i);
  col1.appendChild(i);

  const i2 = document.createElement('input');
  i2.setAttribute('type',"text");
  i2.setAttribute('name',"yAxis");
  i2.setAttribute('placeholder', 'Y-Axis Label');
  col1.appendChild(i2);

  const i3 = document.createElement('input');
  i3.setAttribute('type',"number");
  i3.setAttribute('name',"xAxis");
  i3.setAttribute('placeholder', 'X-Axis min Value');
  refCollection.setRef('xAxisMin')(i3);
  col2.appendChild(i3);

  const i4 = document.createElement('input');
  i4.setAttribute('type',"number");
  i4.setAttribute('name',"yAxis");
  i4.setAttribute('placeholder', 'Y-Axis min Value');
  // i4.setAttribute('ref', refCollection.setRef('yAxis'));
  refCollection.setRef('yAxisMin')(i4);
  col2.appendChild(i4);

  const s = document.createElement("input"); //input element, Submit button
  s.setAttribute('type',"submit");
  s.setAttribute('value',"New Graph");
  form.appendChild(s);
  form.addEventListener('submit', graphCreateAction(refCollection));
  return form;
}