export default function FaleConosco() {
    return (
        <div className="bg-light p-16 flex flex-col justify-center items-center">
            <h2 className="text-4xl text-primary my-10 font-bold">Fale Conosco</h2>
            <form className="flex flex-col w-96 rounded p-5 bg-primary">
                <label className="text-secondary">Nome:</label>
                <input type="text" className="rounded" />
                <label className="mt-5 text-secondary">Email:</label>
                <input type="email" className="rounded" />
                <label className="mt-5 text-secondary">Telefone:</label>
                <input type="tel" className="rounded" />
                <label className="mt-5 text-secondary">Mensagem:</label>
                <textarea id="" cols="30" rows="10" className="rounded"></textarea>
                <button className="mt-10 flex justify-center items-center bg-primary text-secondary font-bold px-5 py-2 rounded border-2 border-secondary hover:text-primary hover:bg-secondary transition-all duration-300">
                    Enviar
                </button>
            </form>

        </div>
    )
}