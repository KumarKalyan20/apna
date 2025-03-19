import TicketNum from "./TicketNum";

export default function Ticket({ticket}) {
 return (
    <div>
        <Ticket ticket={ticket[0]} />
    </div>
 );
}