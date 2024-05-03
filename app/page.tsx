import PoolGraph from "../components/PoolsGraph";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
		{/* Changed div to use flex-row instead of flex-col */}
		<div className="flex flex-row mt-8 gap-4 justify-center items-center col-span-3 sm:col-span-2">
				<PoolGraph network="holesky" api="userPools"/>
				<PoolGraph network="holesky" api="featuredPools"/>
				<PoolGraph network="holesky" api="allPools"/>
		</div>
</section>
	);
}
