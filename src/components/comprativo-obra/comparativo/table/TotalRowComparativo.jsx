
const TotalRowComparativo = () => {
    return (
        <>
            <tr class="comparativo-total-row">
                <td class="comparativo-concept"><strong>TOTAL</strong></td>
                <td class="comparativo-amount-cell">
                    <span class="comparativo-amount"><strong>$2,450,000.00</strong></span>
                </td>
                <td class="comparativo-executed"><strong>$2,369,000.00</strong></td>
                <td class="comparativo-percentage">
                    <div class="comparativo-percentage-content">
                        <span class="comparativo-semaforo comparativo-semaforo-amarillo"></span>
                        <span><strong>96.7%</strong></span>
                    </div>
                 </td>
            </tr>
        </>
    );
}

export default TotalRowComparativo;
