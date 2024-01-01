import { Form, Outlet, useLoaderData, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";

import { useEffect } from "react";

import { getContacts, createContact } from "../contacts";

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    // return state
    return { contacts, q };
}

export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    const searching =
        navigation.location &&
         new URLSearchParams(navigation.location.search).has("q")

    useEffect(() => {
        document.getElementById("q").value = q;
    }, [q]);

    const contactItems = contacts.map(contact => (
        <li key={contact.id}>
            <NavLink to={`contacts/${contact.id}`}
                className={({ isActive, isPending }) =>
                    isActive ? "active" :
                        isPending ? "pending" :
                            ""
                }
            >
                {contact.first || contact.last ? (
                    <>
                        {contact.first} {contact.last}
                    </>
                ) : (
                    <i>No name</i>
                )}
                {" "}
                {contact.favorite && <span>★</span>}
            </NavLink>
        </li>
    ))
    const navItem = contacts.length ? contactItems : <p><i>No contacts</i></p>

    function onChangeHandle(event) {
        submit(event.currentTarget.form, {replace: q != null});
    }

    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    {/* GET Form */}
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            defaultValue={q}
                            name="q"
                            className={searching ? "loading": ""}
                            onChange={onChangeHandle}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    {/* POST Form */}
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {navItem}
                </nav>
            </div>
            <div id="detail"
                className={
                    navigation.state === "loading" ? "loading" : ""
                }
            >
                <Outlet />
            </div>
        </>
    );
}