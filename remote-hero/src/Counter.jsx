import { createSignal } from "solid-js";

export default function Counter() {
    const [count, setCount] = createSignal(0);

    const increment = () => {
        setCount(count() + 1);
    };

    const decrement = () => {
        setCount(count() - 1);
    };
    return (
        <div class="bg-red-500 p-4 h-[500px]">
            <p class="text-white">Bienvenido a mi app con microfrontends</p>
            <div class="flex justify-center items-center mt-4">
                <button class="bg-blue-500 text-white px-4 py-2 mr-2" onClick={decrement}>Decrementar</button>
                <p class="text-white">{count()}</p>
                <button class="bg-green-500 text-white px-4 py-2 ml-2" onClick={increment}>Incrementar</button>
            </div>
        </div>
    );
}