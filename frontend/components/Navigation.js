import Link from 'next/link';
const Navigation= ()=>{
    return(
        <div>
            <ul>
                <li><Link href='/'><a>Home</a></Link></li>
                <li><Link href='/Flights'><a>Flights</a></Link></li>
                <li><Link href='/Aircraft'><a>Aircraft</a></Link></li>
                <li><Link href='/Instructors'><a>Instructors</a></Link></li>
                <li><Link href='/billing'><a>Billing</a></Link></li>
                <li><Link href='/Settings'><a>Settings</a></Link></li>
            </ul>
        </div>
    )
}
export default Navigation;