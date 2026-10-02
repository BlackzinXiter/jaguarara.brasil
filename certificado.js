// certificado.js - GABRIEL SOURCING - Controle Interno
// WhatsApp: +55 88 98895-2379 - Documento PRIVADO, não oficial
(function(){
  const WHATSAPP = "+55 88 98895-2379";

  function loadJsPDF(cb){
    if(window.jspdf) return cb();
    const s = document.createElement('script');
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    s.onload = cb;
    document.head.appendChild(s);
  }

  window.gerarCertificadoPDF = function(){
    loadJsPDF(()=>{
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      const o = window.currentOrder || {};
      const cliente = o.cliente || document.getElementById('eCli')?.value || 'Cliente';
      const produto = o.produto || document.getElementById('eProd')?.value || 'Produto';
      const id = o.id || 'GS-1023';
      const peso = (o.peso || '') + (o.pesoUn || 'g');
      const hoje = new Date().toLocaleDateString('pt-BR');

      // Fundo
      doc.setFillColor(255,255,255);
      doc.rect(0,0,210,297,'F');
      // Header
      doc.setFillColor(10,10,10);
      doc.rect(0,0,210,26,'F');
      doc.setFont('helvetica','bold');
      doc.setFontSize(13);
      doc.setTextColor(204,255,0);
      doc.text('GABRIEL SOURCING',14,10);
      doc.setFontSize(8);
      doc.setTextColor(160,160,160);
      doc.text('Agente de Compras Internacional',14,15);
      doc.setFontSize(9);
      doc.setTextColor(204,255,0);
      doc.text('WhatsApp '+WHATSAPP,14,20);

      doc.setTextColor(20,20,20);
      doc.setFontSize(11);
      doc.setFont('helvetica','bold');
      doc.text('COMPROVANTE DE VERIFICACAO INTERNA',14,36);
      doc.setFontSize(7);
      doc.setFont('helvetica','normal');
      doc.text('USO INTERNO - GABRIEL SOURCING - NAO E DOCUMENTO FISCAL',14,40);
      doc.text('Codigo: GS-QC-'+id+' | Data: '+hoje+' | Pedido: '+id,14,44);
      doc.line(14,46,196,46);

      doc.setFont('helvetica','bold');
      doc.setFontSize(9);
      doc.text('1. CLIENTE',14,53);
      doc.setFont('helvetica','normal');
      doc.text('Nome: '+cliente,14,58);
      doc.text('Pedido: '+id,14,62);

      doc.setFont('helvetica','bold');
      doc.text('2. OPERACAO',14,70);
      doc.setFont('helvetica','normal');
      doc.text('Origem: Shenzhen / Bangkok',14,75);
      doc.text('Hub: Hub de Qualidade - Asia',14,79);
      doc.text('Peso conferido: '+peso,14,83);

      doc.setFont('helvetica','bold');
      doc.text('3. PRODUTO',14,91);
      doc.setFont('helvetica','normal');
      doc.text('- '+produto,14,96);

      doc.setFont('helvetica','bold');
      doc.text('4. CHECKLIST QC',14,104);
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.text('[OK] Conferencia na origem',14,109);
      doc.text('[OK] Conferencia no Brasil',14,113);
      doc.text('[OK] Lacre 1023 aplicado',14,117);
      doc.text('Status: APROVADO',14,123);

      doc.setFontSize(6);
      doc.setTextColor(120,120,120);
      doc.text('Este e um comprovante interno de controle de qualidade da Gabriel Sourcing.',14,135);
      doc.text('Nao substitui nota fiscal ou comprovante oficial. Para duvidas: '+WHATSAPP,14,138);

      doc.save('Comprovante-'+id+'-Gabriel-Sourcing.pdf');
    });
  };

  function injetar(){
    const drawer = document.getElementById('drawer');
    if(!drawer || document.getElementById('btnCertificado')) return;
    const div = document.createElement('div');
    div.id = 'btnCertificado';
    div.className = 'bg-[#121212] border-2 border-[#CCFF00]/30 rounded- p-4 mt-4';
    div.innerHTML = '<div class="text- font-black tracking-widest text-[#CCFF00]">📄 COMPROVANTE INTERNO</div><button onclick="gerarCertificadoPDF()" class="w-full h- mt-3 rounded- bg-[#CCFF00] text-black font-black text-">📄 GERAR COMPROVANTE (PDF)</button><div class="text- text-white/40 mt-2">Uso interno - China+Brasil - '+WHATSAPP+'</div>';
    drawer.appendChild(div);
  }
  setInterval(injetar,1500);
})();