import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IoIosArrowDropdown,
  IoIosArrowDropup,
  IoIosArrowForward,
  IoIosArrowBack,
} from 'react-icons/io';
import { MdAttachMoney } from 'react-icons/md';

import {
  Container,
  ContentCard,
  Card,
  Content,
  DivCard,
  Pagination,
} from './styles';

import { dashboardRequest } from '../../store/modules/dashboard/actions';

export default function Dashboard() {
  const [page, setPage] = useState(1);

  const { transactions, balance } = useSelector((state) => state.dashboard);

  const dispatch = useDispatch();
  const { pagination } = transactions;

  const btnNext = document.getElementById('btnNext');
  const btnPrev = document.getElementById('btnPrev');

  function nextPage() {
    setPage(page + 1);

    if (page + 1 >= pagination.last_page) {
      btnNext.disabled = 'disabled';
    } else {
      btnPrev.disabled = '';
    }
  }

  function previusPage() {
    setPage(page - 1);
    if (page <= 1) {
      btnPrev.disabled = 'disabled';
    } else {
      btnNext.disabled = '';
    }
  }

  useEffect(() => {
    async function loadTransaction() {
      dispatch(dashboardRequest(page));

      const btnPrev2 = document.getElementById('btnPrev');
      if (page <= 1) {
        btnPrev2.disabled = 'disabled';
      }
    }

    loadTransaction();
  }, [dispatch, page]);

  return (
    <Container>
      <ContentCard>
        <Card className="total">
          <div>
            <h2>Total</h2>
            <MdAttachMoney size={40} color="#fff" />
          </div>
          <span>{balance.total}</span>
        </Card>
        <Card>
          <div>
            <h2>Entradas</h2>
            <IoIosArrowDropdown size={40} color="#12A454" />
          </div>
          <span>{balance.income}</span>
        </Card>
        <Card>
          <div>
            <h2>Saídas</h2>
            <IoIosArrowDropup size={40} color="#E83F5B" />
          </div>
          <span>{balance.outcome}</span>
        </Card>
      </ContentCard>
      <Content>
        {transactions.length === 0 ? (
          <h1>Nenhuma transação realizada</h1>
        ) : (
          <>
            <h1>Últimas Transações</h1>
            {transactions.transaction.map((transaction) => (
              <DivCard key={transaction.id}>
                <h4>{transaction.title}</h4>
                <h3
                  style={{
                    color:
                      transaction.type === 'outcome' ? '#E83F5B' : '#12A454',
                  }}
                >
                  {transaction.valueFormatted}
                </h3>
                <div>
                  <span>
                    {transaction.type === 'outcome' ? (
                      <IoIosArrowDropup />
                    ) : (
                      <IoIosArrowDropdown />
                    )}
                    {transaction.category.title}
                  </span>
                  <span>{transaction.dateFormatted}</span>
                </div>
              </DivCard>
            ))}
            <Pagination>
              <button id="btnPrev" type="button" onClick={previusPage}>
                <IoIosArrowBack />
              </button>
              <button id="btnNext" type="button" onClick={nextPage}>
                <IoIosArrowForward />
              </button>
            </Pagination>
          </>
        )}
      </Content>
    </Container>
  );
}
