const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const opcoesSection = document.getElementById('opcoes');
const messagemSection = document.getElementById('message');
const messagemParagrafo = messagemSection.querySelector('p');
const removeBtns = opcoesSection.querySelectorAll('.remove-btn');

removeBtns.forEach((removeBtn) => {
    removeBtn.addEventListener('click', () => {
        const item = removeBtn.parentNode;
        opcoesSection.removeChild(item);

        messagemParagrafo.innerHTML = `<ion-icon name="alert-circle"></ion-icon> O item foi removido da lista!`;
        messagemParagrafo.classList.add('messagem-erro');
        setTimeout(() => {
            messagemParagrafo.textContent = '';
            messagemParagrafo.classList.remove('messagem-erro');
        }, 3000);
    });
});

addBtn.addEventListener('click', () => {
    const itemValue = itemInput.value.trim();

    if (itemValue) {
        const novoItem = document.createElement('div');
        novoItem.classList.add('item_opcao');

        novoItem.innerHTML = `
            <label>
                <input type="checkbox" value="${itemValue}"> ${itemValue}
            </label>
            <button class="remove-btn"><ion-icon name="trash"></ion-icon></button>
        `;
 opcoesSection.appendChild(novoItem);

        itemInput.value = '';

        messagemParagrafo.innerHTML = `<ion-icon name="alert-circle"></ion-icon> O item foi adicionado a lista!`;
        messagemParagrafo.classList.add('messagem-sucesso');
        setTimeout(() => {
            messagemParagrafo.textContent = '';
            messagemParagrafo.classList.remove('messagem-sucesso');
        }, 3000);

        const removeBtn = novoItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', () => {
            opcoesSection.removeChild(novoItem);

   messagemParagrafo.innerHTML = `<ion-icon name="alert-circle"></ion-icon> O item foi removido da lista!`;
            messagemParagrafo.classList.add('messagem-erro');
            setTimeout(() => {
                messagemParagrafo.textContent = '';
                messagemParagrafo.classList.remove('messagem-erro');
            }, 3000);
        });
    }
});