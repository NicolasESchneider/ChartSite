import { genGraphForm } from './form/formLogic';
import { RefCollection } from './types/refCollection';

document.addEventListener("DOMContentLoaded", function(event) {
  const element = document.createElement('h1');
  element.innerHTML = "Lets make a line graph, powered by Vanilla.JS";
  document.getElementById('root').appendChild(element)
  const refCollection = new RefCollection();

  const form = genGraphForm(refCollection);
  document.getElementById('root').appendChild(form);

});

