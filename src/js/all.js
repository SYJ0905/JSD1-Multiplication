(function() {
  const multiSection = document.querySelector('.multi-section');
  for (let i = 2; i < 10; i++) {
    let card = ``;
    let list = ``;
    for (let j = 1; j < 10; j++) {
      list += `
        <div class="card-item">${i} x ${j} = ${i*j}</div> 
      `;
    }
    card += `
      <div class="col-lg-4 h-100">
        <div class="card card-list">
          <div class="d-flex flex-column flex-wrap align-items-center">
            <div class="card-title text-center mb-0">${i}</div>
            ${list}
          </div>
        </div>
      </div>
    `;
    multiSection.innerHTML += card;
  }
})()