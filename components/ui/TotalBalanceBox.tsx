import React from 'react'

const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotalBalanceBoxProps) => {
  return (
    <section className = 'total-balance'>
        <div className = 'total-balance-chart'>
            {/* Doughnut Chart */}
        </div>

        <di className = 'flex flex-col gap-6'>
            <h2 className = 'header-2'>
                Bank accounts: {totalBanks}
            </h2>
            <div className = 'flex flex-col gap-2'>
                <p className = 'total-balance-label'>
                    Total Current Balance
                </p>
                <p className = 'total-balance-amount flex-center gap-2'>
                    {formatAmount(totalCurrentBalance)}	
                </p>
            </div>
        </di>
    </section>
  )
}

export default TotalBalanceBox