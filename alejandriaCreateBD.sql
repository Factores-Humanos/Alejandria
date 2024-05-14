--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.2

-- Started on 2024-04-28 09:29:54 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 3741 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 245 (class 1259 OID 17021)
-- Name: auditory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.auditory (
    id integer NOT NULL,
    type_change character varying(20) NOT NULL,
    "table" character varying(30) NOT NULL,
    record integer NOT NULL,
    field character varying(30) NOT NULL,
    previous_value character varying,
    new_value character varying NOT NULL,
    date_change timestamp with time zone NOT NULL,
    "user" character varying NOT NULL
);


ALTER TABLE public.auditory OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 17020)
-- Name: auditory_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.auditory_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.auditory_id_seq OWNER TO postgres;

--
-- TOC entry 3742 (class 0 OID 0)
-- Dependencies: 244
-- Name: auditory_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.auditory_id_seq OWNED BY public.auditory.id;


--
-- TOC entry 221 (class 1259 OID 16508)
-- Name: author; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.author (
    id integer NOT NULL,
    name character varying(30) NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.author OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16798)
-- Name: author_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.author_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.author_id_seq OWNER TO postgres;

--
-- TOC entry 3743 (class 0 OID 0)
-- Dependencies: 224
-- Name: author_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.author_id_seq OWNED BY public.author.id;


--
-- TOC entry 230 (class 1259 OID 16852)
-- Name: book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book (
    id integer NOT NULL,
    title character varying(40) NOT NULL,
    price integer NOT NULL,
    description text NOT NULL,
    pub_year character varying(5),
    pages integer NOT NULL,
    front_page character varying,
    format_id integer NOT NULL,
    author_id integer,
    publisher_id integer,
    seller_id integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.book OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16935)
-- Name: book_category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book_category (
    book_id integer NOT NULL,
    category_id integer NOT NULL
);


ALTER TABLE public.book_category OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16851)
-- Name: book_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.book_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.book_id_seq OWNER TO postgres;

--
-- TOC entry 3744 (class 0 OID 0)
-- Dependencies: 229
-- Name: book_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.book_id_seq OWNED BY public.book.id;


--
-- TOC entry 240 (class 1259 OID 16920)
-- Name: book_purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.book_purchase (
    book_id integer NOT NULL,
    purchase_id integer NOT NULL
);


ALTER TABLE public.book_purchase OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16894)
-- Name: cart; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart (
    id integer NOT NULL,
    total_amount integer NOT NULL,
    user_id integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.cart OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16905)
-- Name: cart_book; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.cart_book (
    cart_id integer NOT NULL,
    book_id integer NOT NULL
);


ALTER TABLE public.cart_book OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16893)
-- Name: cart_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cart_id_seq OWNER TO postgres;

--
-- TOC entry 3745 (class 0 OID 0)
-- Dependencies: 237
-- Name: cart_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;


--
-- TOC entry 215 (class 1259 OID 16478)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    id integer NOT NULL,
    description character varying(30) NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16805)
-- Name: category_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.category_id_seq OWNER TO postgres;

--
-- TOC entry 3746 (class 0 OID 0)
-- Dependencies: 225
-- Name: category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;


--
-- TOC entry 220 (class 1259 OID 16499)
-- Name: comment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.comment (
    id integer NOT NULL,
    user_id integer NOT NULL,
    observation text NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.comment OWNER TO postgres;

--
-- TOC entry 3747 (class 0 OID 0)
-- Dependencies: 220
-- Name: COLUMN comment.user_id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.comment.user_id IS 'El usuario al que le hicieron el comentario';


--
-- TOC entry 226 (class 1259 OID 16831)
-- Name: comment_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.comment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.comment_id_seq OWNER TO postgres;

--
-- TOC entry 3748 (class 0 OID 0)
-- Dependencies: 226
-- Name: comment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.comment_id_seq OWNED BY public.comment.id;


--
-- TOC entry 242 (class 1259 OID 16950)
-- Name: favorite_books; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorite_books (
    favorite_list_id integer NOT NULL,
    book_id integer NOT NULL
);


ALTER TABLE public.favorite_books OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16861)
-- Name: favorite_list; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.favorite_list (
    id integer NOT NULL,
    user_id integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.favorite_list OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16860)
-- Name: favorite_list_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.favorite_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.favorite_list_id_seq OWNER TO postgres;

--
-- TOC entry 3750 (class 0 OID 0)
-- Dependencies: 231
-- Name: favorite_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.favorite_list_id_seq OWNED BY public.favorite_list.id;


--
-- TOC entry 219 (class 1259 OID 16492)
-- Name: format; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.format (
    id integer NOT NULL,
    description character varying(30) NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.format OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16491)
-- Name: format_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.format_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.format_id_seq OWNER TO postgres;

--
-- TOC entry 3751 (class 0 OID 0)
-- Dependencies: 218
-- Name: format_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.format_id_seq OWNED BY public.format.id;


--
-- TOC entry 217 (class 1259 OID 16485)
-- Name: publisher; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.publisher (
    id integer NOT NULL,
    name_publisher character varying(30) NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.publisher OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16484)
-- Name: publisher_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.publisher_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.publisher_id_seq OWNER TO postgres;

--
-- TOC entry 3752 (class 0 OID 0)
-- Dependencies: 216
-- Name: publisher_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.publisher_id_seq OWNED BY public.publisher.id;


--
-- TOC entry 236 (class 1259 OID 16875)
-- Name: purchase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.purchase (
    id integer NOT NULL,
    total_amount integer NOT NULL,
    date_purchase timestamp with time zone NOT NULL,
    user_id integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.purchase OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 16874)
-- Name: purchase_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.purchase_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.purchase_id_seq OWNER TO postgres;

--
-- TOC entry 3753 (class 0 OID 0)
-- Dependencies: 235
-- Name: purchase_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.purchase_id_seq OWNED BY public.purchase.id;


--
-- TOC entry 223 (class 1259 OID 16515)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.role (
    id integer NOT NULL,
    description character varying(30) NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.role OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16514)
-- Name: role_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.role_id_seq OWNER TO postgres;

--
-- TOC entry 3754 (class 0 OID 0)
-- Dependencies: 222
-- Name: role_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;


--
-- TOC entry 234 (class 1259 OID 16868)
-- Name: sale; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sale (
    id integer NOT NULL,
    total_amount integer NOT NULL,
    date_sale timestamp with time zone NOT NULL,
    seller_id integer NOT NULL,
    book_id integer NOT NULL,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public.sale OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16867)
-- Name: sale_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sale_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sale_id_seq OWNER TO postgres;

--
-- TOC entry 3755 (class 0 OID 0)
-- Dependencies: 233
-- Name: sale_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sale_id_seq OWNED BY public.sale.id;


--
-- TOC entry 228 (class 1259 OID 16841)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    user_name character varying(50) NOT NULL,
    email_address character varying(40) NOT NULL,
    user_password character varying(20) NOT NULL,
    street_address character varying,
    score integer,
    created_date timestamp with time zone NOT NULL,
    deleted_date timestamp with time zone
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16840)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3756 (class 0 OID 0)
-- Dependencies: 227
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 243 (class 1259 OID 16965)
-- Name: user_role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_role (
    user_id integer NOT NULL,
    role_id integer NOT NULL
);


ALTER TABLE public.user_role OWNER TO postgres;

--
-- TOC entry 3535 (class 2604 OID 17024)
-- Name: auditory id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auditory ALTER COLUMN id SET DEFAULT nextval('public.auditory_id_seq'::regclass);


--
-- TOC entry 3527 (class 2604 OID 16799)
-- Name: author id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.author ALTER COLUMN id SET DEFAULT nextval('public.author_id_seq'::regclass);


--
-- TOC entry 3530 (class 2604 OID 16855)
-- Name: book id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book ALTER COLUMN id SET DEFAULT nextval('public.book_id_seq'::regclass);


--
-- TOC entry 3534 (class 2604 OID 16897)
-- Name: cart id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);


--
-- TOC entry 3523 (class 2604 OID 16806)
-- Name: category id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);


--
-- TOC entry 3526 (class 2604 OID 16832)
-- Name: comment id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment ALTER COLUMN id SET DEFAULT nextval('public.comment_id_seq'::regclass);


--
-- TOC entry 3531 (class 2604 OID 16864)
-- Name: favorite_list id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_list ALTER COLUMN id SET DEFAULT nextval('public.favorite_list_id_seq'::regclass);


--
-- TOC entry 3525 (class 2604 OID 16495)
-- Name: format id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.format ALTER COLUMN id SET DEFAULT nextval('public.format_id_seq'::regclass);


--
-- TOC entry 3524 (class 2604 OID 16488)
-- Name: publisher id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publisher ALTER COLUMN id SET DEFAULT nextval('public.publisher_id_seq'::regclass);


--
-- TOC entry 3533 (class 2604 OID 16878)
-- Name: purchase id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase ALTER COLUMN id SET DEFAULT nextval('public.purchase_id_seq'::regclass);


--
-- TOC entry 3528 (class 2604 OID 16518)
-- Name: role id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);


--
-- TOC entry 3532 (class 2604 OID 16871)
-- Name: sale id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale ALTER COLUMN id SET DEFAULT nextval('public.sale_id_seq'::regclass);


--
-- TOC entry 3529 (class 2604 OID 16844)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3573 (class 2606 OID 17028)
-- Name: auditory auditory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.auditory
    ADD CONSTRAINT auditory_pkey PRIMARY KEY (id);


--
-- TOC entry 3545 (class 2606 OID 16804)
-- Name: author author_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);


--
-- TOC entry 3567 (class 2606 OID 16939)
-- Name: book_category book_category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT book_category_pkey PRIMARY KEY (book_id, category_id);


--
-- TOC entry 3553 (class 2606 OID 16859)
-- Name: book book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);


--
-- TOC entry 3565 (class 2606 OID 16924)
-- Name: book_purchase book_purchase_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_purchase
    ADD CONSTRAINT book_purchase_pkey PRIMARY KEY (book_id, purchase_id);


--
-- TOC entry 3563 (class 2606 OID 16909)
-- Name: cart_book cart_book_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_book
    ADD CONSTRAINT cart_book_pkey PRIMARY KEY (cart_id, book_id);


--
-- TOC entry 3561 (class 2606 OID 16899)
-- Name: cart cart_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);


--
-- TOC entry 3537 (class 2606 OID 16811)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);


--
-- TOC entry 3543 (class 2606 OID 16839)
-- Name: comment comment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT comment_pkey PRIMARY KEY (id);


--
-- TOC entry 3569 (class 2606 OID 16954)
-- Name: favorite_books favorite_books_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_books
    ADD CONSTRAINT favorite_books_pkey PRIMARY KEY (favorite_list_id, book_id);


--
-- TOC entry 3555 (class 2606 OID 16866)
-- Name: favorite_list favorite_list_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_list
    ADD CONSTRAINT favorite_list_pkey PRIMARY KEY (id);


--
-- TOC entry 3541 (class 2606 OID 16497)
-- Name: format format_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.format
    ADD CONSTRAINT format_pkey PRIMARY KEY (id);


--
-- TOC entry 3539 (class 2606 OID 16490)
-- Name: publisher publisher_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.publisher
    ADD CONSTRAINT publisher_pkey PRIMARY KEY (id);


--
-- TOC entry 3559 (class 2606 OID 16880)
-- Name: purchase purchase_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT purchase_pkey PRIMARY KEY (id);


--
-- TOC entry 3547 (class 2606 OID 16520)
-- Name: role role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);


--
-- TOC entry 3557 (class 2606 OID 16873)
-- Name: sale sale_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_pkey PRIMARY KEY (id);


--
-- TOC entry 3549 (class 2606 OID 16850)
-- Name: user user_email_address; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_address UNIQUE (email_address);


--
-- TOC entry 3551 (class 2606 OID 16848)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3571 (class 2606 OID 16969)
-- Name: user_role user_role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_pkey PRIMARY KEY (user_id, role_id);


--
-- TOC entry 3575 (class 2606 OID 16985)
-- Name: book book_author_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_author_fkey FOREIGN KEY (author_id) REFERENCES public.author(id) NOT VALID;


--
-- TOC entry 3588 (class 2606 OID 16940)
-- Name: book_category book_category_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT book_category_book_fkey FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3589 (class 2606 OID 16945)
-- Name: book_category book_category_category_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_category
    ADD CONSTRAINT book_category_category_fkey FOREIGN KEY (category_id) REFERENCES public.category(id);


--
-- TOC entry 3576 (class 2606 OID 16980)
-- Name: book book_format_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_format_fkey FOREIGN KEY (format_id) REFERENCES public.format(id) NOT VALID;


--
-- TOC entry 3577 (class 2606 OID 16990)
-- Name: book book_publisher_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_publisher_fkey FOREIGN KEY (publisher_id) REFERENCES public.publisher(id) NOT VALID;


--
-- TOC entry 3586 (class 2606 OID 16925)
-- Name: book_purchase book_purchase_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_purchase
    ADD CONSTRAINT book_purchase_book_fkey FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3587 (class 2606 OID 16930)
-- Name: book_purchase book_purchase_purchase_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book_purchase
    ADD CONSTRAINT book_purchase_purchase_fkey FOREIGN KEY (purchase_id) REFERENCES public.purchase(id);


--
-- TOC entry 3578 (class 2606 OID 16995)
-- Name: book book_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_user_fkey FOREIGN KEY (seller_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3584 (class 2606 OID 16915)
-- Name: cart_book cart_book_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_book
    ADD CONSTRAINT cart_book_book_fkey FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3585 (class 2606 OID 16910)
-- Name: cart_book cart_book_cart_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart_book
    ADD CONSTRAINT cart_book_cart_fkey FOREIGN KEY (cart_id) REFERENCES public.cart(id);


--
-- TOC entry 3583 (class 2606 OID 16900)
-- Name: cart cart_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_user_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


--
-- TOC entry 3574 (class 2606 OID 17000)
-- Name: comment commet_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.comment
    ADD CONSTRAINT commet_user_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3590 (class 2606 OID 16960)
-- Name: favorite_books favorite_books_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_books
    ADD CONSTRAINT favorite_books_book_fkey FOREIGN KEY (book_id) REFERENCES public.book(id);


--
-- TOC entry 3591 (class 2606 OID 16955)
-- Name: favorite_books favorite_books_favorite_list_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_books
    ADD CONSTRAINT favorite_books_favorite_list_fkey FOREIGN KEY (favorite_list_id) REFERENCES public.favorite_list(id);


--
-- TOC entry 3579 (class 2606 OID 17044)
-- Name: favorite_list favorite_list_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.favorite_list
    ADD CONSTRAINT favorite_list_user_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3582 (class 2606 OID 17015)
-- Name: purchase purchase_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.purchase
    ADD CONSTRAINT purchase_user_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3580 (class 2606 OID 17010)
-- Name: sale sale_book_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_book_fkey FOREIGN KEY (book_id) REFERENCES public.book(id) NOT VALID;


--
-- TOC entry 3581 (class 2606 OID 17005)
-- Name: sale sale_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sale
    ADD CONSTRAINT sale_user_fkey FOREIGN KEY (seller_id) REFERENCES public."user"(id) NOT VALID;


--
-- TOC entry 3592 (class 2606 OID 16975)
-- Name: user_role user_role_role_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_role_fkey FOREIGN KEY (role_id) REFERENCES public.role(id);


--
-- TOC entry 3593 (class 2606 OID 16970)
-- Name: user_role user_role_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_role
    ADD CONSTRAINT user_role_user_fkey FOREIGN KEY (user_id) REFERENCES public."user"(id);


-- Completed on 2024-04-28 10:19:19 -05

--
-- PostgreSQL database dump complete
--

