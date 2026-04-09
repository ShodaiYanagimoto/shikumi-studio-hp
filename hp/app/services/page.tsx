import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./services.css";

export const metadata: Metadata = {
  title: "サービス・料金 | しくみスタジオ",
  description:
    "AI・DXで中小企業の変革を支援。相談から実行まで、御社のペースで伴走します。",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="services-page">
        <div className="sv-container">
          <section className="sv-hero">
            <div className="sv-hero-label">しくみスタジオ</div>
            <h1>
              「うちには難しい」を
              <br />
              仕組みで変える。
            </h1>
            <p>
              AI・DXで中小企業の変革を支援。
              <br />
              相談から実行まで、御社のペースで伴走します。
            </p>
          </section>

          <hr className="sv-divider" />

          <section className="sv-section" id="dx">
            <div className="sv-section-label">Service 01</div>
            <div className="sv-section-title">AI・DX支援</div>
            <div className="sv-section-desc">
              どこまで一緒にやるかで、プランを選んでください。
            </div>

            <div className="sv-plans">
              <div className="sv-plan">
                <div className="sv-plan-tag green">相談する</div>
                <div className="sv-plan-name">ライト</div>
                <div className="sv-plan-price">
                  月額 10万円<span>（税別）</span>
                </div>
                <div className="sv-plan-meta">最低契約期間：3ヶ月</div>
                <ul className="sv-plan-features">
                  <li>月1回の面談（60分）</li>
                  <li>オンライン / 経営者1on1</li>
                  <li>チャット相談</li>
                  <li>トレンド共有</li>
                </ul>
                <div style={{ flex: 1 }} />
                <div className="sv-plan-info green">
                  <strong>こんな方／会社に</strong>
                  <ul>
                    <li>
                      AI・DXに興味はあるが何から始めればいいかわからない
                    </li>
                    <li>気軽に相談できるプロの相手がほしい</li>
                    <li>ツールを入れるべきか判断できない</li>
                  </ul>
                </div>
                <div className="sv-plan-role">
                  <strong>しくみスタジオの役割</strong>
                  <ul>
                    <li>経営者の壁打ち相手・情報源</li>
                    <li>「何をすべきか」を一緒に考える</li>
                    <li>業界のAI・DXトレンドを届ける</li>
                  </ul>
                </div>
              </div>

              <div className="sv-plan">
                <div className="sv-plan-tag blue">一緒に進める</div>
                <div className="sv-plan-name">スタンダード</div>
                <div className="sv-plan-price">
                  月額 20万円<span>（税別）</span>
                </div>
                <div className="sv-plan-meta">最低契約期間：3ヶ月</div>
                <ul className="sv-plan-features">
                  <li>月2回の面談（60分）</li>
                  <li>オンラインまたは対面</li>
                  <li>経営者＋担当者も参加可</li>
                  <li>チャット相談</li>
                  <li>トレンド共有</li>
                  <li>課題整理・ツール選定の助言</li>
                </ul>
                <div style={{ flex: 1 }} />
                <div className="sv-plan-info blue">
                  <strong>こんな方／会社に</strong>
                  <ul>
                    <li>
                      やりたいことは見えてきたが社内だけでは進められない
                    </li>
                    <li>経営者だけでなく現場も巻き込みたい</li>
                    <li>DXの優先順位や計画を一緒に考えてほしい</li>
                  </ul>
                </div>
                <div className="sv-plan-role">
                  <strong>しくみスタジオの役割</strong>
                  <ul>
                    <li>伴走パートナーとして方針を一緒に設計</li>
                    <li>課題の整理と優先順位づけ</li>
                    <li>最適なツール・進め方の助言</li>
                  </ul>
                </div>
              </div>

              <div className="sv-plan">
                <div className="sv-plan-tag purple">まるごと任せる</div>
                <div className="sv-plan-name">プレミアム</div>
                <div className="sv-plan-price">
                  月額 40万円<span>（税別）</span>
                </div>
                <div className="sv-plan-meta">最低契約期間：3ヶ月</div>
                <ul className="sv-plan-features">
                  <li>最大月4回の面談（60分）</li>
                  <li>オンラインまたは対面</li>
                  <li>経営会議への定期参加</li>
                  <li>チャット相談</li>
                  <li>トレンド共有</li>
                  <li>環境設計・構築・導入の実作業</li>
                  <li>操作レクチャー・定着支援</li>
                </ul>
                <div style={{ flex: 1 }} />
                <div className="sv-plan-info purple">
                  <strong>こんな方／会社に</strong>
                  <ul>
                    <li>具体的に変えたい業務やツールがある</li>
                    <li>
                      設計から構築、社員への浸透まで任せたい
                    </li>
                    <li>
                      経営の意思決定にテクノロジーを組み込みたい
                    </li>
                  </ul>
                </div>
                <div className="sv-plan-role">
                  <strong>しくみスタジオの役割</strong>
                  <ul>
                    <li>社外CTOとして経営会議に参加</li>
                    <li>仕組みの設計から構築・導入まで実行</li>
                    <li>社員が自走できる状態まで定着を支援</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="sv-notes">
              <p>※ 表示価格はすべて税別です</p>
              <p>※ 対面での面談には別途交通費がかかります</p>
              <p>
                ※
                プレミアムプランの構築・導入に伴うツール利用料（SaaS費用等）はお客様のご負担となります
              </p>
              <p>※ 大規模案件は個別にお見積もりします</p>
            </div>

            <table className="sv-compare">
              <thead>
                <tr>
                  <th></th>
                  <th>ライト</th>
                  <th>スタンダード</th>
                  <th>プレミアム</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>月額</td>
                  <td>10万円</td>
                  <td>20万円</td>
                  <td>40万円</td>
                </tr>
                <tr>
                  <td>面談</td>
                  <td>月1回・60分</td>
                  <td>月2回・60分</td>
                  <td>最大月4回・60分</td>
                </tr>
                <tr>
                  <td>面談形式</td>
                  <td>オンライン</td>
                  <td>オンライン / 対面</td>
                  <td>オンライン / 対面</td>
                </tr>
                <tr>
                  <td>参加者</td>
                  <td>経営者</td>
                  <td>経営者＋担当者</td>
                  <td>経営会議に参加</td>
                </tr>
                <tr>
                  <td>助言</td>
                  <td>壁打ち</td>
                  <td>課題整理・計画策定</td>
                  <td>戦略設計</td>
                </tr>
                <tr>
                  <td>実作業</td>
                  <td>—</td>
                  <td>—</td>
                  <td>構築・導入・定着</td>
                </tr>
                <tr>
                  <td>チャット</td>
                  <td>共通</td>
                  <td>共通</td>
                  <td>共通</td>
                </tr>
                <tr>
                  <td>最低契約期間</td>
                  <td>3ヶ月</td>
                  <td>3ヶ月</td>
                  <td>3ヶ月</td>
                </tr>
              </tbody>
            </table>
          </section>

          <hr className="sv-divider" />

          <section className="sv-section" id="lecture">
            <div className="sv-section-label">Service 02</div>
            <div className="sv-section-title">講演・セミナー</div>
            <div className="sv-section-desc">
              経済団体・企業・自治体向けの登壇。テーマや内容はカスタマイズ可能です。
            </div>

            <div className="sv-lectures">
              <div className="sv-lecture">
                <div className="sv-lecture-name">講演</div>
                <div className="sv-lecture-price">20万円〜</div>
                <div className="sv-lecture-meta">税別・交通費別 / 1回</div>
                <ul className="sv-lecture-features">
                  <li>60〜90分の講演</li>
                  <li>テーマカスタマイズ</li>
                  <li>スライド資料の提供</li>
                  <li>Q&amp;Aセッション</li>
                </ul>
              </div>
              <div className="sv-lecture">
                <div className="sv-lecture-name">ワークショップ研修</div>
                <div className="sv-lecture-price">40万円〜</div>
                <div className="sv-lecture-meta">
                  税別・交通費別 / 半日（3〜4時間）
                </div>
                <ul className="sv-lecture-features">
                  <li>講義＋ハンズオン演習</li>
                  <li>業種・職種に合わせた内容設計</li>
                  <li>参加者用資料・チートシート</li>
                  <li>事後アンケート集計</li>
                </ul>
              </div>
              <div className="sv-lecture">
                <div className="sv-lecture-name">連続研修プログラム</div>
                <div className="sv-lecture-price">100万円〜</div>
                <div className="sv-lecture-meta">
                  税別・交通費別 / 全4回（2ヶ月）
                </div>
                <ul className="sv-lecture-features">
                  <li>全4回の体系的カリキュラム</li>
                  <li>毎回：講義90分＋演習60分</li>
                  <li>回間の実践課題＋フィードバック</li>
                  <li>最終回：自社AI活用プラン発表会</li>
                  <li>受講後1ヶ月のチャットフォロー</li>
                </ul>
              </div>
            </div>

            <div className="sv-notes" style={{ marginTop: 12 }}>
              <p>
                ※
                表示価格はすべて税別です。交通費・宿泊費は別途実費をいただきます
              </p>
              <p>
                ※ 研修内容は御社の業種・課題に合わせてカスタマイズします
              </p>
            </div>
          </section>

          <hr className="sv-divider" />

          <section className="sv-section" id="options">
            <div className="sv-section-label">Options</div>
            <div className="sv-section-title">オプション</div>
            <div className="sv-section-desc">
              プランと組み合わせて、必要なものだけ追加できます。
            </div>

            <div className="sv-option-group">
              <div className="sv-option-group-title">面談・相談</div>
              <table className="sv-option-table">
                <tbody>
                  <tr>
                    <td>スポット相談（オンライン）</td>
                    <td>60分</td>
                    <td>3万円/回〜</td>
                  </tr>
                  <tr>
                    <td>スポット相談（対面）</td>
                    <td>60分・交通費別</td>
                    <td>5万円/回〜</td>
                  </tr>
                  <tr>
                    <td>追加面談</td>
                    <td>60分・既存契約者向け</td>
                    <td>3万円/回〜</td>
                  </tr>
                  <tr>
                    <td>経営会議への参加</td>
                    <td>ライト・スタンダード向け</td>
                    <td>5万円/回〜</td>
                  </tr>
                  <tr>
                    <td>セカンドオピニオン</td>
                    <td>他社の提案書・見積もりを第三者評価</td>
                    <td>5万円/回〜</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sv-option-group">
              <div className="sv-option-group-title">ツール導入・構築</div>
              <table className="sv-option-table">
                <tbody>
                  <tr>
                    <td>ツール選定</td>
                    <td>要件整理・比較・推奨の提示</td>
                    <td>5万円〜</td>
                  </tr>
                  <tr>
                    <td>ツール構築代行</td>
                    <td>初期設定・カスタマイズ・連携構築</td>
                    <td>20万円〜</td>
                  </tr>
                  <tr>
                    <td>データ移行</td>
                    <td>旧ツール→新ツールへの移行</td>
                    <td>10万円〜</td>
                  </tr>
                  <tr>
                    <td>ベンダー選定同席</td>
                    <td>IT業者との打合せに同席・助言</td>
                    <td>5万円/回〜</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sv-option-group">
              <div className="sv-option-group-title">研修・育成</div>
              <table className="sv-option-table">
                <tbody>
                  <tr>
                    <td>社内ミニ勉強会</td>
                    <td>60分・特定テーマ・少人数</td>
                    <td>10万円/回〜</td>
                  </tr>
                  <tr>
                    <td>ハンズオン操作レクチャー</td>
                    <td>特定ツールの使い方・2時間</td>
                    <td>15万円/回〜</td>
                  </tr>
                  <tr>
                    <td>DX推進リーダー育成</td>
                    <td>キーパーソンへの個別指導・月2回</td>
                    <td>15万円/月〜</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="sv-notes">
              <p>※ 表示価格はすべて税別です</p>
              <p>※ 対面のオプションには別途交通費がかかります</p>
              <p>
                ※
                ツール構築代行・データ移行の費用は、対象ツールや規模により変動します
              </p>
            </div>
          </section>

          <div className="sv-cta">
            <h2>まずは無料で相談してみる</h2>
            <p>
              Web面談で30分、お気軽にどうぞ。2営業日以内にご返信します。
            </p>
            <a href="https://shikumi.studio/#contact" className="sv-cta-btn">
              無料相談を予約する
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
