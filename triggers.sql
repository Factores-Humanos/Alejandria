---
-- Para la tabla author
---

CREATE OR REPLACE FUNCTION audit_author_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('INSERT', 'author', NEW.id, 'name', NULL, NEW.name, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_author_insert_trigger
AFTER INSERT ON public.author
FOR EACH ROW
EXECUTE FUNCTION audit_author_insert();

CREATE OR REPLACE FUNCTION audit_author_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('UPDATE', 'author', NEW.id, 'name', OLD.name, NEW.name, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_author_update_trigger
AFTER UPDATE ON public.author
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION audit_author_update();

---
-- Para la tabla author
---


---
-- Para la tabla category
---

CREATE OR REPLACE FUNCTION audit_category_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('INSERT', 'category', NEW.id, 'description', NULL, NEW.description, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_category_insert_trigger
AFTER INSERT ON public.category
FOR EACH ROW
EXECUTE FUNCTION audit_category_insert();


CREATE OR REPLACE FUNCTION audit_category_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('UPDATE', 'category', NEW.id, 'description', OLD.description, NEW.description, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_category_update_trigger
AFTER UPDATE ON public.category
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION audit_category_update();

---
-- Para la tabla category
---


---
-- Para la tabla book
---

CREATE OR REPLACE FUNCTION audit_book_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'book', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'book';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_book_insert_trigger
AFTER INSERT ON public.book
FOR EACH ROW
EXECUTE FUNCTION audit_book_insert();

CREATE OR REPLACE FUNCTION audit_book_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'book', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'book'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_book_update_trigger
AFTER UPDATE ON public.book
FOR EACH ROW
EXECUTE FUNCTION audit_book_update();

---
-- Para la tabla book
---

---
-- Para la tabla cart
---

CREATE OR REPLACE FUNCTION audit_cart_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('INSERT', 'cart', NEW.id, 'total_amount', NULL, NEW.total_amount, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_cart_insert_trigger
AFTER INSERT ON public.cart
FOR EACH ROW
EXECUTE FUNCTION audit_cart_insert();


CREATE OR REPLACE FUNCTION audit_cart_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('UPDATE', 'cart', NEW.id, 'total_amount', OLD.total_amount, NEW.total_amount, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_cart_update_trigger
AFTER UPDATE ON public.cart
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION audit_cart_update();

---
-- Para la tabla cart
---

---
-- Para la tabla comment
---

CREATE OR REPLACE FUNCTION audit_comment_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('INSERT', 'comment', NEW.id, 'observation', NULL, NEW.observation, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_comment_insert_trigger
AFTER INSERT ON public.comment
FOR EACH ROW
EXECUTE FUNCTION audit_comment_insert();


CREATE OR REPLACE FUNCTION audit_comment_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    VALUES ('UPDATE', 'comment', NEW.id, 'observation', OLD.observation, NEW.observation, current_timestamp, current_user);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_comment_update_trigger
AFTER UPDATE ON public.comment
FOR EACH ROW
WHEN (OLD.* IS DISTINCT FROM NEW.*)
EXECUTE FUNCTION audit_comment_update();

---
-- Para la tabla comment
---

---
-- Para la tabla format
---

CREATE OR REPLACE FUNCTION audit_format_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'format', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'format';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_format_insert_trigger
AFTER INSERT ON public.format
FOR EACH ROW
EXECUTE FUNCTION audit_format_insert();

CREATE OR REPLACE FUNCTION audit_format_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'format', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'format'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_format_update_trigger
AFTER UPDATE ON public.format
FOR EACH ROW
EXECUTE FUNCTION audit_format_update();

---
-- Para la tabla format
---

---
-- Para la tabla publisher
---

CREATE OR REPLACE FUNCTION audit_publisher_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'publisher', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'publisher';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_publisher_insert_trigger
AFTER INSERT ON public.publisher
FOR EACH ROW
EXECUTE FUNCTION audit_publisher_insert();

CREATE OR REPLACE FUNCTION audit_publisher_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'publisher', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'publisher'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_publisher_update_trigger
AFTER UPDATE ON public.publisher
FOR EACH ROW
EXECUTE FUNCTION audit_publisher_update();

---
-- Para la tabla publisher
---


---
-- Para la tabla purchase
---

CREATE OR REPLACE FUNCTION audit_purchase_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'purchase', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'purchase';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_purchase_insert_trigger
AFTER INSERT ON public.purchase
FOR EACH ROW
EXECUTE FUNCTION audit_purchase_insert();

CREATE OR REPLACE FUNCTION audit_purchase_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'purchase', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'purchase'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_purchase_update_trigger
AFTER UPDATE ON public.purchase
FOR EACH ROW
EXECUTE FUNCTION audit_purchase_update();

---
-- Para la tabla purchase
---

---
-- Para la tabla role
---

CREATE OR REPLACE FUNCTION audit_role_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'role', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'role';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_role_insert_trigger
AFTER INSERT ON public.role
FOR EACH ROW
EXECUTE FUNCTION audit_role_insert();


CREATE OR REPLACE FUNCTION audit_role_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'role', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'role'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_role_update_trigger
AFTER UPDATE ON public.role
FOR EACH ROW
EXECUTE FUNCTION audit_role_update();

---
-- Para la tabla role
---

---
-- Para la tabla sale
---
CREATE OR REPLACE FUNCTION audit_sale_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'sale', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'sale';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_sale_insert_trigger
AFTER INSERT ON public.sale
FOR EACH ROW
EXECUTE FUNCTION audit_sale_insert();


CREATE OR REPLACE FUNCTION audit_sale_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'sale', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'sale'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_sale_update_trigger
AFTER UPDATE ON public.sale
FOR EACH ROW
EXECUTE FUNCTION audit_sale_update();
---
-- Para la tabla sale
---

---
-- Para la tabla user
---

CREATE OR REPLACE FUNCTION audit_user_insert()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'INSERT', 'user', NEW.id, column_name, NULL, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'user';
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_user_insert_trigger
AFTER INSERT ON public."user"
FOR EACH ROW
EXECUTE FUNCTION audit_user_insert();

CREATE OR REPLACE FUNCTION audit_user_update()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auditory (type_change, "table", record, field, previous_value, new_value, date_change, "user")
    SELECT 'UPDATE', 'user', NEW.id, column_name, OLD.*, NEW.*::text, current_timestamp, current_user
    FROM information_schema.columns
    WHERE table_name = 'user'
    AND (OLD.* IS DISTINCT FROM NEW.*);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_user_update_trigger
AFTER UPDATE ON public."user"
FOR EACH ROW
EXECUTE FUNCTION audit_user_update();


---
-- Para la tabla user
---



