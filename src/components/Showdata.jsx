import { useEffect, useState } from "react";

export const Showdata = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      `https://t12a.trkd-hs.com/apimqmy/MarketDataJSON?type=toptradedstock&qid=1636521235752`
    )
      .then((d) => d.json())
      .then((res) => {
        setData(res.topList);
      });
  };
  console.log(data);

  return (
    <div className="showdata">
      {data.map((item) => {
        return (
          <>
            <table>
              <tbody>
                <tr>
                  <th>underlying_ric</th>
                  <th>underlying_ticker</th>
                  <th>undelrying_turnover</th>
                  <th>TRDPRC_1</th>
                  <th>BID</th>
                  <th>NETCHNG_1</th>
                  <th>PCTCHNG</th>
                  <th>dw_ticker_c</th>
                  <th>dw_ric_c</th>
                  <th>dw_type_c</th>
                  <th>dw_dsply_nmll_c</th>
                  <th>warrant_price_c</th>
                  <th>eff_gearing_c</th>
                  <th>sensitivity_c</th>
                  <th>dw_ticker_p</th>
                  <th>dw_ric_p</th>
                  <th>dw_type_p</th>
                  <th>dw_dsply_nmll_p</th>
                  <th>warrant_price_p</th>
                  <th>eff_gearing_p</th>
                  <th>sensitivity_p</th>
                  <th>update_time</th>
                  <th>ric</th>
                  <th>maturity</th>
                </tr>
                <tr>
                  <td>{item.underlying_ric}</td>
                  <td>{item.underlying_ticker}</td>
                  <td>{item.undelrying_turnover}</td>
                  <td>{item.TRDPRC_1}</td>
                  <td>{item.BID}</td>
                  <td>{item.NETCHNG_1}</td>
                  <td>{item.PCTCHNG}</td>
                  <td>{item.dw_ticker_c}</td>
                  <td>{item.dw_ric_c}</td>
                  <td>{item.dw_type_c}</td>
                  <td>{item.dw_dsply_nmll_c}</td>
                  <td>{item.warrant_price_c}</td>
                  <td>{item.eff_gearing_c}</td>
                  <td>{item.sensitivity_c}</td>
                  <td>{item.dw_ticker_p}</td>
                  <td>{item.dw_ric_p}</td>
                  <td>{item.dw_type_p}</td>
                  <td>{item.dw_dsply_nmll_p}</td>
                  <td>{item.warrant_price_p}</td>
                  <td>{item.eff_gearing_p}</td>
                  <td>{item.sensitivity_p}</td>
                  <td>{item.update_time}</td>
                  <td>{item.ric}</td>
                  <td>{item.maturity}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
    </div>
  );
};
