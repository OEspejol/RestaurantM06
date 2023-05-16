class TicketComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        this.totalPrice = 0;
        this.orders = [];

        const container = document.createElement('div');
        container.classList.add('ticket-container', 'p-3', 'bg-light');

        this.orderList = document.createElement('ul');
        this.orderList.classList.add('list-group', 'mb-3');

        const orderTitle = document.createElement('h2');
        orderTitle.classList.add('h4', 'mb-4');
        orderTitle.textContent = 'Plats i Begudes';
        container.appendChild(orderTitle);

        container.appendChild(this.orderList);

        const totalContainer = document.createElement('div');
        totalContainer.classList.add('total-container');

        const preufinaltotal = document.createElement('p');
        preufinaltotal.classList.add('h6', 'mb-0');
        preufinaltotal.textContent = 'Preu final total:';
        preufinaltotal.style.cssText = "font-size: 20px; color: #4CAF50; font-weight: bold; margin-bottom: 10px;";
        totalContainer.appendChild(preufinaltotal);
        

        this.priceSpan = document.createElement('span');
        this.priceSpan.classList.add('price', 'h5', 'fw-bold');
        this.priceSpan.textContent = '0.00 €';
        this.priceSpan.style.cssText = "background-color: white;color: #4CAF50; margin-bottom: 10px; background-color: #f2f2f2; border-radius: 20px;";
        totalContainer.appendChild(this.priceSpan);
        

        container.appendChild(totalContainer);

        const clearButton = document.createElement('button');
        clearButton.classList.add('btn', 'btn-danger');
        clearButton.textContent = 'Enviar la comanda';
        clearButton.style.cssText = "background-color: #4CAF50; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 12px; transition: background-color 0.3s ease;";
        clearButton.onmouseover = function() { this.style.backgroundColor = "#45a049"; }
        clearButton.onmouseout = function() { this.style.backgroundColor = "#4CAF50"; }
        

        clearButton.addEventListener('click', () => {
            const confirmation = confirm('Estàs segur que vols enviar la comanda?');
            if (confirmation) {
                this.clearOrderList();
            }
        });

        container.appendChild(clearButton);

        shadow.appendChild(container);
    }
    // Afegir elements
    addOrder({ name, price, category }) {
        const orderItem = document.createElement('li');
        orderItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'mb-2');
        orderItem.style.cssText = "list-style-type: none; background-color: #007bff; color: white; font-size: 18px; padding: 15px 20px; border-radius: 10px; margin-bottom: 10px; transition: background-color 0.3s ease;";
        orderItem.onmouseover = function() { this.style.backgroundColor = "#0056b3"; }
        orderItem.onmouseout = function() { this.style.backgroundColor = "#007bff"; }
        

        const nameDiv = document.createElement('div');
        nameDiv.textContent = `Nom: ${name}`;
        orderItem.appendChild(nameDiv);

        const categoryDiv = document.createElement('div');
        categoryDiv.textContent = `Categoria: ${category}`;
        orderItem.appendChild(categoryDiv);

        const priceDiv = document.createElement('div');
        priceDiv.classList.add('d-flex', 'align-items-center');
        const priceLabel = document.createElement('span');
        priceLabel.textContent = 'Preu: ';
        priceDiv.appendChild(priceLabel);
        const priceSpan = document.createElement('span');
        priceSpan.classList.add('badge', 'bg-primary', 'rounded-pill', 'me-2');
        priceSpan.textContent = `${price.toFixed(2)} €`;
        priceDiv.appendChild(priceSpan);
        orderItem.appendChild(priceDiv);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-sm', 'btn-danger');
        deleteButton.textContent = 'Eliminar';
        deleteButton.style.cssText = "background-color: #ff4d4d; color: white; border: none; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; margin: 4px 2px; cursor: pointer; border-radius: 12px; transition: background-color 0.3s ease;";
        deleteButton.onmouseover = function() { this.style.backgroundColor = "#cc0000"; }
        deleteButton.onmouseout = function() { this.style.backgroundColor = "#ff4d4d"; }        
        orderItem.appendChild(deleteButton);

        this.orderList.appendChild(orderItem);

        const handleDeleteClick = () => {
            this.removeOrder(orderItem, price);
        };

        deleteButton.addEventListener('click', handleDeleteClick);

        this.totalPrice += price;
        this.priceSpan.textContent = `${this.totalPrice.toFixed(2)} €`;

        alert(`Producto seleccionado: ${name}`);
    }
    //Eliminar items
    removeOrder(orderItem, price) {
        this.orderList.removeChild(orderItem);
        this.totalPrice -= price;
        this.priceSpan.textContent = `${this.totalPrice.toFixed(2)} €`;
    }

    clearOrderList() {
        // Eliminar todos los elementos de la lista de pedidos
        while (this.orderList.firstChild) {
            this.orderList.removeChild(this.orderList.firstChild);
        }
        // Reiniciar el precio total
        this.totalPrice = 0;
        this.priceSpan.textContent = '0.00 €';
    }
}

customElements.define('ticket-component', TicketComponent);