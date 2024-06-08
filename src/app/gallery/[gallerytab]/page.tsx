'use client'

export default function Page(props: { params: { gallerytab: string } }) {

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-4 gap-4">
            {props.params.gallerytab}
        </div>
    );
}
