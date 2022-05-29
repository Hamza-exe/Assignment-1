'use strict';

import db from './db.js';
import { select, selectAll } from './utility.js';

const g = select('#movies-grid');

const desc = select('#desc');
const runtimme = select('#length');
const release = select('#release');
const image = select('#movie-img');
const name = select('#names');
const popup = select('#one')
const add = select('#accept');
const close = select('#manage');


for (var i = 0, len = g.children.length; i < len; i++) {
    (function (index) {
        g.children[i].onclick = function () {
            popup.showModal();
            name.innerText = db.data[index].movie;
            image.src = db.data[index].image;
            release.innerText = db.data[index].release;
            runtimme.innerText = db.data[index].runtime;
            desc.innerText = db.data[index].desc;
        }
    })(i);

}

add.addEventListener('click', () => {
    add.value = 'Added!'
});

close.addEventListener('click', () => {
    popup.close();
    add.value = 'Watch Later';
});


console.log(db);