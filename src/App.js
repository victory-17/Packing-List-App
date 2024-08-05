import Header from "./components/Header";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import {useState} from "react";
import Swal from 'sweetalert2';

function App() {
    const [items, setItems] = useState([]);

    function handleAddItems(item) {
        setItems(items => [...items, item]);
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id));
    }


/*     function handleClearListItems() {
        const confirmed = window.confirm('Are you sure? You want to delete All items!');
        if (confirmed) setItems([]);
    } */

    function handleClearListItems() {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to delete All items!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete all items!'
        }).then((result) => {
            if (result.isConfirmed) {
                setItems([]);
                Swal.fire({
                    title: 'Items Deleted',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    }


    function handlePackedItem(id) {
        setItems(items => {
            return items.map(item => {
                return item.id === id ? {...item, packed: !item.packed} : item
            })
        })
    }

    /*
    function handlePackedItem(id) {
        setItems(items => {
            return items.map(item => {
                if (item.id === id) {
                    return { ...item, packed: !item.packed };
                }
                return item;
            });
        });
    }*/


    return (
        <main className={"app"}>
            <Header/>
            <Form onAddItems={handleAddItems}/>
            <PackingList items={items}
                        onDeleteItem={handleDeleteItem}
                        onPackedItem={handlePackedItem}
                        onClearListItems={handleClearListItems}/>
            <Stats items={items}/>
        </main>
    );
}

export default App;
