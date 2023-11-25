"use client";
import { useRouter } from "next/navigation";
import React from "react";



const LawPage = () => {
	const router = useRouter();
	return (
		<div className="container py-10">
			<div className="flex flex-col items-start gap-y-10 mb-10">
				<div className="border py-2 px-3 rounded-[7px] text-muted-foreground text-sm" onClick={() => router.back()}>
					 Go Back
				</div>
				<span className="text-green-500 text-3xl lg:text-5xl font-extrabold ">
					Статья 36.
				</span>
				<h1 className={`text-2xl lg:text-3xl font-bold`}>
					Электронные информационные ресурсы,
					<br />
					содержащие персональные данные
				</h1>
			</div>

			<section className="my-4 text-muted-foreground/90">
				<h2 className="text-2xl font-bold text-white">Пункт 1</h2>
				<p className="mt-2">
					Электронные информационные ресурсы, содержащие персональные данные,
					подразделяются на электронные информационные ресурсы, содержащие
					общедоступные персональные данные, и электронные информационные
					ресурсы, содержащие персональные данные ограниченного доступа.
				</p>

				<p className="mt-2">
					К электронным информационным ресурсам, содержащим общедоступные
					персональные данные, относятся электронные информационные ресурсы,
					содержащие персональные данные, на которые в соответствии с законами
					Республики Казахстан не распространяются требования соблюдения
					конфиденциальности, доступ к которым является свободным с согласия
					субъекта персональных данных.
				</p>

				<p className="mt-2">
					К электронным информационным ресурсам, содержащим персональные данные
					ограниченного доступа, относятся электронные информационные ресурсы,
					доступ к которым ограничен субъектом персональных данных или законами
					Республики Казахстан.
				</p>

				<p className="mt-2">
					При доступе к электронным информационным ресурсам, содержащим
					персональные данные ограниченного доступа, применяется многофакторная
					аутентификация.
				</p>
			</section>

			<section className="my-4 text-muted-foreground/90">
				<h2 className="text-2xl font-bold text-white">Пункт 2</h2>
				<p className="mt-2">
					Собственник или владелец электронных информационных ресурсов,
					содержащих персональные данные, при передаче электронных
					информационных ресурсов, содержащих персональные данные, собственнику
					или владельцу информационной системы обязан получить согласие субъекта
					персональных данных или его законного представителя на сбор и
					обработку персональных данных с использованием информационных систем,
					за исключением случаев, предусмотренных Законом Республики Казахстан
					«О персональных данных и их защите».
				</p>
			</section>

			<section className="my-4 text-muted-foreground/90">
				<h2 className="text-2xl font-bold text-white">Пункт 3</h2>
				<p className="mt-2">
					При оказании государственной услуги в электронной форме согласие
					субъекта персональных данных или его законного представителя на сбор и
					обработку персональных данных посредством информационных систем
					предоставляется через государственный сервис контроля доступа к
					персональным данным.
				</p>
			</section>

			<section className="my-4 text-muted-foreground/90">
				<h2 className="text-2xl font-bold text-white">Пункт 4</h2>
				<p className="mt-2">
					Собственники или владельцы информационных систем государственных
					органов обязаны уведомлять субъектов персональных данных или их
					законных представителей через государственный сервис контроля доступа
					к персональным данным в автоматическом режиме обо всех случаях
					использования, изменения и дополнения персональных данных в рамках
					информационного взаимодействия, за исключением осуществления
					деятельности правоохранительных, специальных государственных органов
					Республики Казахстан и судов, исполнительного производства, при
					условии регистрации субъектов персональных данных или их законных
					представителей на веб-портале «электронного правительства».
				</p>

				<p className="mt-2">
					Помимо оснований, установленных Законом Республики Казахстан «О
					персональных данный и их защите», государственный орган при оказании
					государственных услуг в случаях выявления явных ошибок и неточностей
					электронных информационных ресурсов, содержащих персональные данные, в
					целях их устранения может осуществлять их изменение и дополнение после
					получения запроса субъекта персональных данных или его законного
					представителя.
				</p>
			</section>
		</div>
	);
};

export default LawPage;