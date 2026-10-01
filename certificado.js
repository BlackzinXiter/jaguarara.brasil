(function(){
  const WHATSAPP="+55 88 98895-2379";
  function loadJsPDF(cb){ if(window.jspdf) return cb(); const s=document.createElement('script'); s.src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"; s.onload=cb; document.head.appendChild(s); }
  window.gerarCertificadoPDF=function(){
    loadJsPDF(()=>{
      const {jsPDF}=window.jspdf; const doc=new jsPDF(); const o=window.currentOrder||{}; const cliente=o.cliente||'Cliente'; const produto=o.produto||'Produto'; const id=o.id||'GS-1023'; const peso=o.peso||'0,850kg'; const valor=o.valor||'R$ 180,00'; const hoje=new Date().toLocaleDateString('pt-BR');
      doc.setFillColor(255,255,255); doc.rect(0,0,210,297,'F'); doc.setFillColor(0,0,0); doc.rect(0,0,210,28,'F');
      doc.setFont('helvetica','bold'); doc.setFontSize(14); doc.setTextColor(255,255,255); doc.text('GABRIEL SOURCING',14,12);
      doc.setFontSize(8); doc.setTextColor(160,160,160); doc.text('Agente de Compras Internacional - China & Tailandia',14,18);
      doc.setFontSize(9); doc.setTextColor(204,255,0); doc.text('WhatsApp '+WHATSAPP,14,23);
      doc.setTextColor(0,0,0); doc.setFontSize(12); doc.setFont('helvetica','bold'); doc.text('CERTIFICADO DE PROCEDENCIA E VERIFICACAO',14,38);
      doc.setFontSize(8); doc.setFont('helvetica','normal'); doc.text('Codigo Interno: GS-QC-'+id+' | Emissao: '+hoje+' | Pedido: '+id,14,44); doc.line(14,48,196,48);
      doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.text('1. DESTINATARIO',14,56); doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.text('Cliente: '+cliente,14,62); doc.text('Pedido: '+id,14,67);
      doc.setFont('helvetica','bold'); doc.text('2. OPERACAO',14,77); doc.setFont('helvetica','normal'); doc.text('Origem: Shenzhen, China / Bangkok, Tailandia',14,83); doc.text('Centro: Hub de Qualidade - Asia',14,88); doc.text('Peso: '+peso,14,93);
      doc.setFont('helvetica','bold'); doc.text('3. PRODUTOS',14,103); doc.setFont('helvetica','normal'); doc.text('- '+produto+' | '+valor,14,109);
      doc.setFont('helvetica','bold'); doc.text('4. LAUDO DUPLO QC',14,119); doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.text('[OK] Inspecao fisica na China',14,125); doc.text('[OK] Inspecao fisica no Brasil',14,130); doc.text('[OK] Costura, etiqueta, tamanho, embalagem OK',14,135); doc.text('[OK] Lacre n 1023 aplicado',14,140); doc.setFont('helvetica','bold'); doc.text('Status: APROVADO',14,147);
      doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.text('5. AUTENTICACAO',14,157); doc.setFillColor(0,0,0); doc.rect(14,161,80,10,'F'); doc.setTextColor(204,255,0); doc.setFontSize(8); doc.text('VERIFICADO - GABRIEL SOURCING',16,168); doc.setTextColor(0,0,0); doc.setFont('helvetica','normal'); doc.text('Codigo: GS-AUTH-1023-8X92',14,178);
      doc.setFontSize(6); doc.text('Documento privado de controle de qualidade. Nao substitui docs oficiais.',14,190);
      doc.save('Certificado-'+id+'-Gabriel-Sourcing.pdf');
    });
  };
  function injetar(){ const drawer=document.getElementById('drawer'); if(!drawer||document.getElementById('btnCertificado')) return; const div=document.createElement('div'); div.id='btnCertificado'; div.className='bg-[#121212] border-2 border-[#CCFF00]/30 rounded-[16px] p-4 mt-4'; div.innerHTML='<div class="text-[11px] font-black tracking-widest text-[#CCFF00]">📄 CERTIFICADO PRIVADO</div><button onclick="gerarCertificadoPDF()" class="w-full h-[48px] mt-3 rounded-[12px] bg-[#CCFF00] text-black font-black text-[12px]">📄 GERAR CERTIFICADO (PDF)</button><div class="text-[10px] text-white/40 mt-2">Sem CNPJ, sem Sugargoo. China+Brasil. '+WHATSAPP+'</div>'; const ref=drawer.querySelector('button[onclick="copyMsg(\'link\')"]')?.parentElement; if(ref&&ref.parentElement) ref.parentElement.insertBefore(div, ref.nextSibling); else drawer.appendChild(div); }
  setInterval(injetar,1500);
})();