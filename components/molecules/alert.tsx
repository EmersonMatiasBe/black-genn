export default function Alert({ type }: { type?: "success" | "error" }) {
  if (type === undefined) {
    return null;
  }

  return (
    <>
      {type === "success" && (
        <div className="fixed bottom-5 right-10 max-w-[400px] w-[80dvw] bg-[#0d6d13dd] px-8 py-3 rounded-sm">
          <h6 className="text-lg text-white font-semibold">Sucesso</h6>
          <p className="text-white">Mensagem enviada com sucesso.</p>
        </div>
      )}
      {type === "error" && (
        <div className="fixed bottom-5 right-10 max-w-[400px] w-[80dvw] bg-[#6d120de3] px-8 py-3 rounded-sm">
          <h6 className="text-lg text-white font-semibold">Erro</h6>
          <p className="text-white">Não foi possível enviar a mensagem.</p>
        </div>
      )}
    </>
  );
}

